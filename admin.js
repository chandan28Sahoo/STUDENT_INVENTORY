module.exports=((admin,knex,jwt)=>{
    // admin get data by using id
    admin
        .get('/ad',(req,res)=>{
            let id=req.query.id || 0;
            let decode = jwt.verify(req.headers.authorization,'secret')
            if (decode.email=='chandan19@navgurukul.org'){
                knex
                .select('*')
                .from('students')
                .andWhere(function(){
                    if(id!=" "){
                        this.where('stud_id',id)
                    }else{
                        this.where('stud_id','>',0)
                    }
                })
                .then((data)=>{ 
                    if (data.length!=0){
                        res.send(data)
                    }else{
                        res.send("data not avilable !")
                    }
                }).catch(err=>{
                    res.send(err);
                })
            }else{
                res.send("only admin admin able to see !")
            }
        })


    admin
        .put('/:id',(req,res)=>{
            let decode = jwt.verify(req.headers.authorization,'secret')
            if (decode.email=='chandan19@navgurukul.org'){
                knex
                .select('*')
                .from('students')
                .where("stud_id",req.params.id)
                .update(req.body)
                .then((data)=>{
                    res.send("secuessfully update !")
                }).catch(err=>{
                    res.send(err);
                })
            }else{
                res.send("only admin able to update !")
            }
        })


    admin
        .put('/:id',(req,res)=>{
            let decode = jwt.verify(req.headers.authorization,'secret')
            if (decode.email=='chandan19@navgurukul.org'){
                knex
                .select('*')
                .from('students')
                .where("stud_id",req.params.id)
                .del()
                .then((data)=>{
                    res.send("secuessfully delete !")
                }).catch(err=>{
                    res.send(err);
                })
            }else{
                res.send("only admin able to delete any data !")
            }
        })
})





















