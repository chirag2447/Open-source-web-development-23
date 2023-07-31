const express = require('express')
const app = express()

app.use("/",(req,res,next) => {
    console.log(`${req.url} called `)
    next()
})

app.get("/",(req,res)=>{
    res.send("/ url called")
})

app.get("/hello",(req,res)=>{
    res.send("hello world")   
})

app.get("/h*",(req,res)=>{})
app.get("/hello/*",(req,res)=>{})

app.get('/:name/:id',(req,res)=>{
    res.send(`id is ${req.params.id} name is ${req.papams.name}`)
})

app.get("/page1",(req,res,next)=>{
    res.write("handler 1 called ")
    next()
},(req,res)=>{
    res.write("handler 2 called")
    res.end()
})

app.post("/hello",(req,res)=>{
    res.send("hello world from post")   
})

app.get('*',(req,res)=>{})//this should be in the last becuase it matches all the routes

app.listen(8080,()=>{
    console.log("server has started on port http://localhost:8080")
})