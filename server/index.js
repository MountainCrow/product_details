const express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const Promise = require('bluebird');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Products';
//Postgress DB and router
//const router = require('../routes/router.js');
//const DB = require('../database/postDB.js');

//data generation
//const data = require('./dataGen.js')

//mongo db and router;
//const DB = require('../database/mongoDb.js');
const router = require('../routes/MongoRouter.js');

MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, client) {
  if(err) throw err;
  console.log('Connected DB')
  const db= client.db('Products');
  const collection = db.collection('clothing');
  app.locals.collection = collection;
});

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
