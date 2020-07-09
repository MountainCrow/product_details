const express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const Promise = require('bluebird');
const router = require('../routes/router.js');
const DB = require('../database/postDB.js');

let port = process.env.PORT||3002;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/',router);

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
