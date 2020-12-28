const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Init the express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const getJson = require('./routes/getJson.js');
app.use('/api/persons', getJson)

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));