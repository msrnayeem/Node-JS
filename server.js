// Step 1: Load environment variables from the .env file
require('dotenv').config();

// Step 2: Import express and create an app
const express = require('express');
const app = express();

// Step 3: Get the port from the environment variable
const PORT = process.env.PORT || 3000; // Default to 3000 if not defined

// Step 4: Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World from Express!');
});

// Step 5: Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
