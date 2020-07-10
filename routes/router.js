const express = require('express');
const router = express.Router();
const pool = require('../database/postDB.js');

router.get('/database',(req,res)=>{

  pool.query("SELECT * FROM clothing")
  .then((data)=>{
    
    res.send(data.rows);
  })
  .catch(e=> console.error(e.stack))

})



router.post('/database',(req,res)=>{
  res.send('works too')
})
router.put('/database',(req,res)=>{
  res.send('works three')
})
router.delete('/database',(req,res)=>{
  res.send('works four')
})

module.exports = router;
