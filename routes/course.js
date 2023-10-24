const expres=require("express");
const rout=expres.Router();

rout.get("/cousre",((req,res)=>{
    res.send("this is cousre route")
}))

module.exports=rout;