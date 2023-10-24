//connection 

const mongo=require("mongoose");

mongo.connect("mongodb://127.0.0.1:27017/firstmongo").then(
    ()=>{
        console.log("Connceting to mongodb has been succseed .");
    }
).catch(
    (err)=>{
        console.log(err);
    }
);

//build schema 


const personSchema=new  mongo.Schema({
    name:{type : String ,maxLength:20},
    age:{type :Number,max:90 ,min : 18},
    job:String
},{collection: 'first'})


// build model 

const Person =mongo.model("first",personSchema);

module.exports=Person;