const expres=require("express");
const rout=expres.Router();

rout.get("/student",((req,res)=>{
    res.send("this is student route")
}))

module.exports=rout;