require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const PRIVATE_PASSWORD = process.env.PRIVATE_PASSWORD || 'secret123';
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define Item Schema & Model
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    isPrivate: { type: Boolean, default: false }
});

const Item = mongoose.model('Item', itemSchema);

// Routes (now async to interact with the database)
app.get('/api/items', async (req, res) => {
    try {
        const showPrivate = req.headers['x-access-token'] === PRIVATE_PASSWORD;
        const query = showPrivate ? {} : { isPrivate: false };
        const items = await Item.find(query);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
});

app.post('/api/items', async (req, res) => {
    try {
        const { name, category, quantity, isPrivate } = req.body;
        const newItem = new Item({
            name,
            category,
            quantity: parseInt(quantity) || 1,
            isPrivate: Boolean(isPrivate)
        });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json({ error: 'Failed to save item' });
    }
});

app.post('/api/verify-password', (req, res) => {
    const { password } = req.body;
    if (password === PRIVATE_PASSWORD) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Incorrect password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});