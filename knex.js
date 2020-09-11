var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'chandan19',
      database : 'student_inventory'
    }
});

module.exports=knex;
