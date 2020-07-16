const express = require('express');
const router = express.Router();
const pool = require('../database/postDB.js');
const faker = require('faker');
var count = 0;

router.get('/status', function (req, res) {
  res.status(200)
  res.sendStatus(200)
  res.end()
});

router.get('/database',(req,res)=>{
  pool.query("SELECT * FROM clothing WHERE id = 1")
  .then((data)=>{
    //count to test server count/ artiller count
    // count = count +1
    // console.log(count);
    // //log item id to ensure each request has an item resonse
    // console.log(data.rows[0].id)
    res.json(data.rows);
  })
  .catch((err)=>{
    console.log(err)
    res.send(err)
  })

})

router.get('/database/range',(req,res)=>{
  pool.query('SELECT * FROM clothing WHERE id BETWEEN 9900000 AND 10000000')
    .then((data)=>{
      res.json(data.rows)
    })
    .catch((err)=>{
      res.send(err);
    })
})

router.post('/database',(req,res)=>{

  pool.query("SELECT MAX(id) FROM clothing;")
    .then((data)=>{
      count = count +1
      console.log(count);
      var index = Number(data.rows[0].max)+1;
      console.log(index);
      pool.query(`INSERT INTO clothing(id,feature1,feature2,feature3,feature4,feature5,description,activitydetail,familydetail,genderdetail,legaldetail,featuresdetail,materialspec,heightspec,widthspec,depthspec,volumespec,weigthspec,additionalcare,productid,image)VALUES(${index},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png') returning *`)
        .then((data)=>{
          console.log(data.rows[0].id)
          res.send(data);
        })
        .catch((err)=>{
          res.send(err);
        })
    })
    .catch((err)=>{
      res.send(err);
    })

})

router.post('/database/mult',(req,res)=>{

  pool.query("SELECT MAX(id) FROM clothing;")
    .then((data)=>{
      var index = Number(data.rows[0].max)+1;
      var indexTwo =Number(data.rows[0].max)+2;
      var indexThree = Number(data.rows[0].max)+3;
      var indexFour = Number(data.rows[0].max)+4;
      var indexFive = Number(data.rows[0].max)+5;
      var indexSix = Number(data.rows[0].max)+6;
      var indexSeven =Number(data.rows[0].max)+7;
      var indexEight = Number(data.rows[0].max)+8;
      var indexNine = Number(data.rows[0].max)+9;
      var indexTen = Number(data.rows[0].max)+10;
      console.log(index);
      pool.query(`INSERT INTO clothing(id,feature1,feature2,feature3,feature4,feature5,description,activitydetail,familydetail,genderdetail,legaldetail,featuresdetail,materialspec,heightspec,widthspec,depthspec,volumespec,weigthspec,additionalcare,productid,image)VALUES(${index},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexTwo},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexThree},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexFour},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexFive},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexSix},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexSeven},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexEight},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexNine},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png'),(${indexTen},'Practical everyday jacket with a fixed hooder.','Made from durable G-1000 Lite with G-1000 Original reinforcementser.','Pre-shaped sleeves.','Two-way front zipper with inside flap.','Two hand pockets and one chest pocket, all zippered.','Comfortable jacket in durable G-1000 and G-1000 Lite, a practical everyday garment that also works well in nature. Pre-shaped sleeves and fixed hood that sits snugly around your face. Two zippered side pockets. Zipper in the front with inner flap. Adjustment at the hem and buttoned sleeve cuffs. Can be waxed for added protection from wind and rain.','Outdoor','Övik','Men','Contains non-textile elements of animal origin.','Adaptable with Greenland Wax, WINDRESISTANT, Breathable, Durable, Water-resistant','G-1000® Original: 65% polyester, 35% cottonG-1000® Lite: 65% polyester, 35% cotton',15,20,35,44,430,'do not use fabric softener, wash separately',0,'https://product-details-sdc.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-08+at+4.20.00+PM.png') returning *`)
        .then((data)=>{
          res.send(data);
        })
        .catch((err)=>{
          res.send(err);
        })
    })
    .catch((err)=>{
      res.send(err);
    })

})

router.put('/database',(req,res)=>{
  res.send('works three')
})
router.delete('/database',(req,res)=>{
  res.send('works four')
})

module.exports = router;
