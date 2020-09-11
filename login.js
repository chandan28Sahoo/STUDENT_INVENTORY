module.exports = ((login,knex,jwt)=>{
    login
        .post('/login',(req,res)=>{
            knex.select('*').from('students')
            .then(rows=>{
                var condition=false;
                for (i of rows){
                    if (i.email == req.body.email && i.password == req.body.password){
                        // console.log(req.body.email,req.body.password)
                        condition=true;
                        var token = jwt.sign({"email":req.body.email},'secret')
                    }
                }
                if (condition){
                    res.json({massage:'login sucessfully',"token":token})
                }
                else{
                    res.send("Invalid email & password ! try again !"); 
                }
            })
        })
})

// chandan
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5kYW4xOUBuYXZndXJ1a3VsLm9yZyIsImlhdCI6MTU5OTczOTU0Nn0.89kdySnNaE_YDRs_AyPK3kRr8eYXe6iPSHnwCBdlbzg

// bhaskar
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJoYXNrYXIxOUBuYXZndXJ1a3VsLm9yZyIsImlhdCI6MTU5OTczOTYwM30.mcT4-mAXWF_PSIsdHho9LCEAaB6iyMbQTxwpj4bclfA

// kumar
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1bWFyMTlAbmF2Z3VydWt1bC5vcmciLCJpYXQiOjE1OTk3Mzk0NTR9.XKGQhMyoGJQNVf-2N9DGlGxoHAlTeX0jB69WzypU0IU





    // knex('sign_up').where("email",req.body.email).then((result)=>{
//     if (result[0] != undefined || result.length !=0  ){
//         // console.log(result)
//         if (result[0]["password"]==req.body.password){
//             res.send('login sucessfully')
//         }else{
//             res.send("curect your password")
//         }
//     }else{
//         res.send("404")
//     }
// });
