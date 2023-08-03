const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("Hello User !");
        res.write("\nThis is the first program.")
        res.end();
    }
})

server.listen(3000,()=>{
    console.log("server is running");
})