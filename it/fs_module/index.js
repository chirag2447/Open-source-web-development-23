const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.writeFile("textfile.txt","Hello User",(err,result)=>{
            if(err){
                console.log(err);
            }else{
             res.write("File is created");
             res.end();
            }
        })
    }else if(req.url=="/readfile")
    {
        fs.readFile("textfile.txt","utf-8",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.write(result);
                res.end();
            }
        })
    }else if(req.url=="/addmoredata")
    {
        fs.appendFile("textfile.txt","\nAdd More data in this file.",(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.write("Another Data Added..!");
                res.end();
            }
        })
    }
})

server.listen(3000,()=>{
    console.log("server is running on port 3000");
})