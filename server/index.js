require('dotenv').config();
//require('newrelic');
const express = require('express');
let app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');


//add title to locals app locals obj
app.locals.title = "My Product Details App"

//data generation
//const data = require('./dataGen.js')

//Postgress DB and router
const router = require('../routes/router.js');
const DB = require('../database/postDB.js');


//mongo db and router;
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/Products'||process.env.DB;
// const router = require('../routes/MongoRouter.js');
// MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },function (err, client) {
//   if(err) throw err;
//   console.log('Connected DB')
//   const db= client.db('Products');
//   const collection = db.collection('clothing');
//   app.locals.collection = collection;
// });


let port = process.env.PORT||3002;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/loaderio-8afa083c6413c91cf6d4354baeed2ef2.txt',(req,res)=>{
  res.send("loaderio-8afa083c6413c91cf6d4354baeed2ef2")
})

app.use('/',router);

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
