const {Pool,Client} = require('pg');

//CONNECTION TO LOCAL DATABASE
// const pool = new Pool({
//   user:'eduardoramos',
//   password: 'Cruzazul',
//   host:'localhost',
//   port:'5432',
//   database:'products',
// })

//CONNECTION TO DEPLOYED DATABASE
const pool = new Pool({
  user:'postgres',
  password: 'Cruzazul',
  host:'ec2-54-153-42-140.us-west-1.compute.amazonaws.com',
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

module.exports = pool;

