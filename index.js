const student=require("./routes/student")
const cousre=require("./routes/course")

const mongoose=require("mongoose")
const ex= require('express')
const path= require("path")
var bodyParser = require('body-parser')

const  app=ex();

app.listen(3000 ,(()=> console.log("hellow from first express app ")))
app.use(ex.urlencoded({extended:true}))
app.use(student)
app.use(cousre)
app.use(bodyParser.json());



//local data base 

const workers=[{name:"ali",id:1},{name:"mohamed",id:2}]
const Ajv=require('ajv')
const { stringify } = require("querystring")
const schema={
    "type":"object",
    "properties":{
        "name":{"type":"string","maxLength":10}
    }
}

const ajv=new Ajv();

let validator=ajv.compile(schema)



//connect to mongodb 


mongoose.connect("mongodb://127.0.0.1:27017/firstmongo").then(
    ()=>{
        console.log("Connceting to mongodb has been succseed .");
    }
).catch(
    (err)=>{
        console.log(err);
    }
);


//create database schema 

const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    work:String
} ,{collection: 'first'})



//create model 

const person = mongoose.model("first",personSchema)

// console.log(person.find({}))


//console.log(person.find({}).exec())
 
const ob=  person.find().then((data) => {
    console.log(data);

   });

// save object to database 

function addnewobj(n,a,w){
    let p=new person(
        {name:n,age:a,work:w}
    )
    p.save().then(()=>{console.log("saved")})
};

addnewobj("ahmed",28,"3watly")
 

const b=  person.find({Name:"Mohamed"}).then((data) => {
    console.log(data);

   });

   console.log("hhhhhhhhh")
console.log(b)
//apis 
app.get('/',((re,res)=>{
    console.log("request recived ")
    //res.send("Hellow This IS your first express app .")
    res.sendFile(path.join(__dirname,"/home.html"))
}))

app.post('/',((req,res)=>{
    console.log(req.body)
    res.send("data recieved ")
}))



//api requet parameters 

app.post('/api',((req,res)=>{
    console.log(req.body)
    res.send("data recieved to api ")
}))

app.get("/api/:id",((req,res)=>{
    const worker=workers.find((val,index,arr)=> { return val.id==req.params.id})
    console.log(worker)
    res.json(worker)
}))

app.get("/workers",((req,res)=>{
    res.json(workers)
}))