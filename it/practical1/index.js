const http = require('http');
const url = require('url');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    var url1=url.parse(req.url,true);
    // console.log(req.url);
    if(url1.pathname=="/")
    {
        fs.readFile("./form.html",(err,data)=>{
            if(err){
                res.writeHead(404,{'content-type':'text/html'});
                return res.end("404 page not found");
                // console.log(err);
            }
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
            res.end();
        })              

    }else if(url1.pathname=="/process" && req.method=="GET"){
        // console.log("hfghgf"+ req.url.query.email);
        res.write("Email : "+ url1.query.email+"\nPassword : " + url1.query.password);
        res.end();
    }
    else{
        res.end("Another Request is here");
        
    }

});

server.listen(1713,()=>{
console.log("server is running on port 1713")
})