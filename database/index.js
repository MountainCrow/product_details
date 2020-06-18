const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird')


Promise.promisifyAll(mongoose)

let repoSchema = mongoose.Schema({
  productFeatures: Array,
  productDescription: String,
  productDetails: Array,  // array?
    // activity: String,
    // family: String,
    // gender: String,
    // legalNotice: String,
    // environmentalInfo: String,
    // features: String
  productSpecs: Array // this should be an array?
    // material: String,
    // height: Number,
    // width: Number,
    // depth: Number,
    // volume: Number,
    // weight: Number,
    // additionalCare: String

});



let Repo = mongoose.model('Repo', repoSchema);
// Saving repos from git to DB
let save = (repos) => {
//   for (var i = 0; i < 100; i++) {
//     let newRepo = new Repo ({
//     return;
//  })
// }
}


module.exports.save = save;