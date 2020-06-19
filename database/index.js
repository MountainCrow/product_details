const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useUnifiedTopology: true, useNewUrlParser: true });
const Promise = require('bluebird')
const data = require('./sampleData.js')



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log('Database conneted!') })


let repoSchema = mongoose.Schema({
  feature1: String,
  feature2: String,
  feature3: String,
  feature4: String,
  feature5: String,
  description: String,
  activityDetail: String,
  familyDetail: String,
  genderDetail: String,
  legalDetail: String,
  featuresDetail: String,
  materialSpec: String,
  heightSpec: Number,
  widthSpec: Number,
  depthSpec: Number,
  volumeSpec: Number,
  weightSpec: Number,
  additionalCare: String,
  productID: Number,
  image: String

});

let Repo = mongoose.model('Repo', repoSchema);
// Saving repos from git to DB
//console.log(data)
let save = (data) => {
  for (var i = 0; i < data.length; i++) {
    let newRepo = new Repo({
      feature1: data[i].feature1,
      feature2: data[i].feature2,
      feature3: data[i].feature3,
      feature4: data[i].feature4,
      feature5: data[i].feature5,
      description: data[i].description,
      activityDetail: data[i].activityDetail,
      familyDetail: data[i].familyDetail,
      genderDetail: data[i].genderDetail,
      legalDetail: data[i].legalDetail,
      featuresDetail: data[i].featuresDetail,
      materialSpec: data[i].materialSpec,
      heightSpec: data[i].heightSpec,
      widthSpec: data[i].widthSpec,
      depthSpec: data[i].depthSpec,
      volumeSpec: data[i].volumeSpec,
      weightSpec: data[i].weightSpec,
      additionalCare: data[i].additionalCare,
      productID: (i + 1),
      image: 'https://fecproductiondescription.s3-us-west-1.amazonaws.com/fjallSampleScene.jpg',
    })
    newRepo.save((err, Repo) => {
      if (err) {
        console.log('Error while creating database')
      } else {
        console.log('Saving to repo!')
      }
    })
  }
}
// save(data.data)


module.exports = Repo;
module.exports.save = save;