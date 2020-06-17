const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const db = require('../database/index.js')
let app = express();
let port = 3000;

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

Promise.promisifyAll(require("mongoose"));

app.post('/', function (req, res) {

});

app.get('/', function (req, res) {
});



app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

