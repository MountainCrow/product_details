const {Pool,Client} = require('pg');

// const pool = new Pool({
//   user:'eduardoramos',
//   password: 'Cruzazul',
//   host:'localhost',
//   port:'5432',
//   database:'products',
// })
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

