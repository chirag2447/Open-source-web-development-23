const express = require("express")
const app = express()
const fs = require("fs")


app.get("/gethello",(req,res)=>{
    fs.readFile("./index.html","utf8",(err,data)=>{
        res.send(data)
    })
    // res.send(`<h1>hello nodeJs!!!</h1>`)
})

app.listen(3000)
