'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('mongoose');
var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
//create routing object
var bin = require('./api/bins/index');


//create an express app
var app = express();

// Connect to database
mongoose.connect(config.mongodbUri);

//configure the express app to parse JSON-formatted body
app.use(bodyParser.json());

//add static path.

console.log(config.root);

//Add routes for bins api
app.get('/api/bins',bin.index);
app.post('/api/bins',bin.create);
app.put('/api/bins/:id',bin.update);
app.delete('/api/bins/:id',bin.delete);

// Listen on port 8000, IP defaults to 127.0.0.1
app.listen(config.port)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
