const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Allow Express to read form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static files from the "public" directory
app.use(express.static('public'));


let inventory = [];
const PRIVATE_PASSWORD = process.env.PRIVATE_PASSWORD || "secondGO";

// API Endpoints
app.get('/api/items', (req, res) => {
    const showPrivate = req.headers['x-access-token'] === PRIVATE_PASSWORD;
    const items = showPrivate ? inventory : inventory.filter(item => !item.isPrivate);
    res.json(items);
});

app.post('/api/items', (req, res) => {
    const { name, category, quantity, isPrivate } = req.body;
    const newItem = {
        id: Date.now(),
        name,
        category,
        quantity: parseInt(quantity) || 1,
        isPrivate: Boolean(isPrivate)
    };
    inventory.push(newItem);
    res.status(201).json(newItem);
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