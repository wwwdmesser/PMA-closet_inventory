const express = require('express');
const app = express();
const PORT = 3000;

// Allow Express to read form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// A simple test route for the homepage
app.get('/', (req, res) => {
    res.send('<h1>Closet Inventory App</h1><p>Your server is up and running!</p>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});