const axios = require('axios');

const helpers ={
  getStatus:()=>  axios.get('http://localhost:3002/status')
    .then((res)=>{
      return res.data;
    }),
  getProduct: ()=>axios.get('http://localhost:3002/database')
    .then((res)=>{
      return res.data
    })
}
module.exports = helpers;