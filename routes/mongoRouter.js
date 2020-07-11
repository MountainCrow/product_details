const express = require('express');
const router = express.Router();
const faker = require('faker')

var ObjectID = require('mongodb').ObjectID;

//item 1
//var look = "5f08f3628ccd55e775863ffd"
//item 5,000,000
//var look = "5f0925278ccd55e775d28b3c"
//item 10,000,000
var look = "5f09286c8ccd55e7751ed67d";
router.get('/database',(req,res)=>{
  const collection = req.app.locals.collection;
  collection.find({_id:new ObjectID(look)})
  .toArray((err,data)=>{

    res.send(data);
  })
})
//get range
router.get('/database/range',(req,res)=>{
  const collection = req.app.locals.collection;
  collection.find({})
    .sort({_id:-1})
    .limit(100000)
    .toArray((err,data)=>{
      res.send(data);
    })
})

router.post('/database',(req,res)=>{
  const collection = req.app.locals.collection;
  collection.find({})
    .sort({_id:-1})
    .limit(1)
    .toArray((err,data)=>{
      var index= data[0].id+1;
      var feature1= faker.lorem.sentence();
      var feature2= faker.lorem.sentence();
      var feature3= faker.lorem.sentence();
      var feature4= faker.lorem.sentence();
      var feature5= faker.lorem.sentence();
      var description= faker.lorem.paragraph();
      var activitydetail = faker.lorem.sentence();
      var familydetail = faker.lorem.sentence();
      var genderdetail = 'Male';
      var legaldetail = faker.lorem.sentence();
      var featuresdetail = faker.lorem.sentence();
      var materialspec = faker.lorem.sentence();
      var heightspec = Math.floor(Math.random() * Math.floor(150));
      var widthspec =  Math.floor(Math.random() * Math.floor(50));
      var depthspec = Math.floor(Math.random() * Math.floor(80));
      var volumespec = Math.floor(Math.random() * Math.floor(280));
      var weigthspec = Math.floor(Math.random() * Math.floor(400));
      var additionalcare = faker.lorem.sentence();
      var productid = Math.floor(Math.random() * Math.floor(15));
      var image = 'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png';
      var record = {
        id:index,
        feature1:feature1,
        feature2:feature2,
        feature3:feature3,
        feature4:feature4,
        feature5:feature5,
        description:description,
        activitydetail:activitydetail,
        familydetail:familydetail,
        genderdetail:genderdetail,
        legaldetail:legaldetail,
        featuresdetail:featuresdetail,
        materialspec:materialspec,
        heightspec:heightspec,
        widthspec:widthspec,
        depthspec:depthspec,
        volumespec:volumespec,
        weigthspec:weigthspec,
        additionalcare:additionalcare,
        productid:productid,
        image:image,
      };
      console.log(index)
      collection.insertOne(record,(err,data)=>{
        res.json(data)
      })

    })
})

router.put('/database',(req,res)=>{
  res.send('works three')
})
router.delete('/database',(req,res)=>{
  res.send('works four')
})



module.exports = router;