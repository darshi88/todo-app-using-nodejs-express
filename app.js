const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const todoRouter = require('../routes/Todo')
const Todo =require('./model/Todo.model')

app.use('./Todo',todoRouter)
const app= express();
// app.set("view engine" ,"ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
const url='mongodb://localhost:27017/todolistDB'
mongoose.connect(url,{useNEWurlparser:true})
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("connected....");
})


app.listen(9000,function(){
    console.log('server started')
})