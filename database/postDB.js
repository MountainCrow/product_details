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

module.exports = pool;

