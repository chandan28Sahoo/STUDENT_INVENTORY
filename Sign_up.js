module.exports=((signup,knex)=>{
    signup
        .post('/',(req,res)=>{
        var decition = false;
        knex.select('*').from('students')
        .then(row=>{
            if (row.length==0){
                knex('students').insert([req.body])
                .then(row=>{
                    res.send('sucessfully sign up');
                })
            }else{       
                knex.select('*').from('students')
                .then(row=>{
                    for (i in row){     
                        if(row[i].email==req.body.email && row[i].name==req.body.name){
                            decition = true
                        }else{
                            decition = false;
                        }
                    }if (decition){ 
                        res.send("data is alredy existed")
                    }else{
                        knex('students').insert(req.body)
                        .then(row=>{
                            res.send("secuessfully sign up. !")
                        })
                    }
                })
            }
        })
    })
})

