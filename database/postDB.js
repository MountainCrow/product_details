const {Pool,Client} = require('pg');

const pool = new Pool({
  user:'eduardoramos',
  password: 'Cruzazul$10',
  host:'localhost',
  port:'5432',
  database:'products',
})

pool.connect()
  .then(()=>{
    console.log('Connected to DB')
  })
  .catch((e)=>{
    console.log('error: '+e);
  })

// pool.query("INSERT INTO clothing(feature1,feature2,feature3,feature4,feature5,description,activitydetail,familydetail,genderdetail,legaldetail,featuresdetail,materialspec,heightspec,widthspec,depthspec,volumespec,weigthspec,additionalcare,productid,image)VALUES('Practical everyday jacket with a fixed hood.','Made from durable G-1000 Lite with G-1000 Original reinforcements.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png')")
//   .then(res=>console.log(res.rows[0]))
//   .catch(e=> console.error(e.stack))

module.exports = pool;

