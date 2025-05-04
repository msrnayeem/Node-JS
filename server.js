// Step 1: Import required packages
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();

// Step 2: Enable CORS for all routes
app.use(cors()); // This enables CORS for all routes by default

// Step 3: Define routes for all HTTP methods

// GET route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello, this is a GET request!',
        status: 'success',
    });
});

// POST route
app.post('/', (req, res) => {
    res.json({
        message: 'Hello, this is a POST request!',
        status: 'success',
    });
});

// PUT route
app.put('/', (req, res) => {
    res.json({
        message: 'Hello, this is a PUT request!',
        status: 'success',
    });
});

// DELETE route
app.delete('/', (req, res) => {
    res.json({
        message: 'Hello, this is a DELETE request!',
        status: 'success',
    });
});

// PATCH route
app.patch('/', (req, res) => {
    res.json({
        message: 'Hello, this is a PATCH request!',
        status: 'success',
    });
});

// OPTIONS route
app.options('/', (req, res) => {
    res.json({
        message: 'Hello, this is an OPTIONS request!',
        status: 'success',
    });
});

// Step 4: Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
