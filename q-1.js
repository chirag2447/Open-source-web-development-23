const http = require("http");
const url = require("url");
const fs = require("fs");
const static = require("node-static");

const fileServer = new static.Server("./public");

// const server = http.createServer((req, res) => {
//     req.addListener("end", () => {
//         fileServer.serve(req, res);
//       })
//       .resume();

// });
const server=http.createServer((req,res)=>{
    var url1=url.parse(req.url,true);
    if(url1.pathname=="/")
    {
        fileServer.serve(req, res);
       

    }else if(url1.pathname=="/process" && req.method=="GET"){
        // console.log("hfghgf"+ req.url.query.email);
        res.write("Email : "+ url1.query.email+"\nPassword : " + url1.query.password);
        res.end();
    }else if(url1.pathname=="/process" && req.method=="POST"){
        var body='';
        req.on("data",chunk=>{
            body +=chunk;
        })
        req.on("end",()=>{
            res.write(body);
            res.end();
        });
    }else{
        res.end("Another Request is here");

    }
});

server.listen(3000, () => {
  console.log("server is running on port http://localhost:3000");
});
