const express = require('express')
const app = express()
const myRouter = require("./router")



app.use("/my",myRouter)

// app.use("/",(req,res,next) => {
//     console.log(`${req.url} called `)
//     next()
// })


app.listen(8080,()=>{
    console.log("server has started on port http://localhost:8080")
})