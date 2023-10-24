const Person=require("../models/person")



function addNewPerson(req,res){
    let p= new Person({
        Name:req.body.name,Age:req.body.age,job:req.body.job
    })

    p.save().then(()=>{
        res.send(p)
    }).catch((err)=>{
        console.log(err)
    })
}

