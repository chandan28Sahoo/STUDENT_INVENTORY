const express=require('express');
const knex=require("./knex");
const router =express.Router();
const jwt = require('jsonwebtoken')
const app=express();
app.use('/',router)
router.use(express.json())

// sign_up
router.use('/sign_up',router)
require("./Sign_up")(router,knex);

// login
router.use('/log_in', router)
require('./login')(router,knex,jwt);


// details all
router.use('/students',router);
require('./user')(router,knex,jwt)


// admin
router.use('/admin',router)
require("./admin")(router,knex,jwt);

router.get('/',(req,res)=>{
    console.log("databases connected");
})


app.listen(3000,()=>{console.log("port is running on 3000");})



















// {
//     "fname":"chandan",
//     "lname":"sahoo",
//     "username":"chandan",
//     "DOB":"12-5-1997",
//     "age":"24",
//     "gender":"m",
//     "email":"chandan@1gmail.com",
//     "password":"chandan12",
//     "facebook_id":"chandan/fb.com"
// }













































// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       user : 'root',
//       password : 'chandan19',
//       database : 'chandan'
//     }
// });

// var knex1 = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       user : 'root',
//       password : 'chandan19',
//       database : 'fb_blog'
//     }
// });
