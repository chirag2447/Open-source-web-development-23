const http=require('http');
const static=require('node-static');

const fileServer = new static.Server('./files');
const server=http.createServer((req,res)=>{
    // res.end("hello world");
    req.addListener('end',()=>{
        fileServer.serve(req,res);
    }).resume();
});



server.listen(1713,()=>{
    console.log('server is listening on port 1713');
})