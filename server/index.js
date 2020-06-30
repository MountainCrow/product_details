const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
const db = require('../database/index.js')
const Repo = require('../database/index.js')


let app = express();
let port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

Promise.promisifyAll(require("mongoose"));

// app.post('/', function (req, res) {

// });
var corsOptions = {
  origin: 'http://localhost/3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const status = app.get('/', cors(corsOptions), function (req, res) {
  res.status(200)
  res.end()
});

//Get request initiated in index.jsx on component mount
// moves database data to
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

module.exports = status;