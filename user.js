module.exports=((routes,knex,jwt)=>{
    // get details by user
    routes
        .get('/',(req,res)=>{
            let decode = jwt.verify(req.headers.authorization,'secret')
            // console.log(decode);
            knex('students')
            .where('email',decode.email)
            .then(row=>{
                res.send(row)
            })
        })

    // update  anything by user 
    routes
        .put('/update',(req,res)=>{
            let decode = jwt.verify(req.headers.authorization,'secret')
            knex('students')
            .where('email',decode.email)
            .update(req.body)
            .then(row=>{
                res.send("secuessfully update !")
            }).catch(err=>{
                res.send(err);
            })
        })


    // delete anything by user
    routes
        .delete('/delete',(req,res)=>{
            let decode = jwt.verify(req.headers.authorization,'secret')
            console.log(decode);
            knex('students')
            .where('email',decode.email)
            .del()
            .then(()=>{
                res.send("secuessfully deleted")
            }).catch(err=>{
                res.send(err);
            })
        })
})
