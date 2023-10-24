// Import required modules and packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Define middleware functions
app.use(bodyParser.json());
app.use(cors());

// Define routes for the application
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
