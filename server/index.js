const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
const db = require('../database/index.js')
let app = express();
let port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public/index.html'));

Promise.promisifyAll(require("mongoose"));

// app.post('/', function (req, res) {

// });

app.get('/', function (req, res) {
  res.sendFile('../public/index.html');
  res.status(200)
  res.end()
});



app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

