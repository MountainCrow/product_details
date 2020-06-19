const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
const db = require('../database/index.js')
const Repo = require('../database/index.js')

let app = express();
let port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

Promise.promisifyAll(require("mongoose"));

// app.post('/', function (req, res) {

// });

app.get('/', function (req, res) {
  res.status(200)
  res.end()
});

app.get('/database', function (req, res) {
  Repo.find({}, (err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results)
    }
  }).limit(1)
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

