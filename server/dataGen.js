const faker = require('faker');

const createCSV= require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');

const csvStr = createCSV({
  header:[
      {id:'id',title:'id'},
      {id:'feature1',title:'feature1'},
      {id:'feature2',title:'feature2'},
      {id:'feature3',title:'feature3'},
      {id:'feature4',title:'feature4'},
      {id:'feature5',title:'feature5'},
      {id:'description',title:'description'},
      {id:'activitydetail',title:'activitydetail'},
      {id:'familydetail',title:'familydetail'},
      {id:'genderdetail',title:'genderdetail'},
      {id:'legaldetail',title:'legaldetail'},
      {id:'featuresdetail',title:'featuresdetail'},
      {id:'materialspec',title:'materialspec'},
      {id:'heightspec',title:'heightspec'},
      {id:'widthspec',title:'widthspec'},
      {id:'depthspec',title:'depthspec'},
      {id:'volumespec',title:'volumespec'},
      {id:'weigthspec',title:'weigthspec'},
      {id:'additionalcare',title:'additionalcare'},
      {id:'productid',title:'productid'},
      {id:'image',title:'image'},
    ]
});

fs.writeFileSync('postData10.csv',csvStr.getHeaderString(),(err)=>{
  if(err)
  {
    console.log(err);
  }else{
    console.log('header added');
  }

})
for(var i = 9000000; i<10000001;i++){
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
  var image = faker.lorem.word()+".png"

  var record = [{
    id:i,
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
  }]

  fs.appendFileSync('postData10.csv',csvStr.stringifyRecords(record),(err)=>{
    if(err){
      console.log('err'+err)
    }else{
      console.log('worked')
    }
  })

}

