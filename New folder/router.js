const router = require("express").Router()



router.get("/",(req,res)=>{
    res.send("/ url called")
})

router.get("/chirag",(req,res)=>{
    res.send("<h1>hello from chirag</h1>")
})

router.get("/panchal",(req,res)=>{
    res.send("<h1>hello from panchal</h1>")
})

router.get("/hello",(req,res)=>{
    res.send("<h1>hello world</h1>")   
})

router.get("/h*",(req,res)=>{})
router.get("/hello/*",(req,res)=>{})

router.get('/:name/:id',(req,res)=>{
    res.send(`id is ${req.params.id} name is ${req.papams.name}`)
})

router.get("/page1",(req,res,next)=>{
    res.write("handler 1 called ")
    next()
},(req,res)=>{
    res.write("handler 2 called")
    res.end()
})

router.post("/hello",(req,res)=>{
    res.send("hello world from post")   
})

router.get('*',(req,res)=>{})//this should be in the last becuase it matches all the routes


module.exports = router