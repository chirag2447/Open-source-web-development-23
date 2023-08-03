var fs =require('fs'); 


function readdata(fpath)
{
    return new Promise((success,fail)=>{
        fs.readFile(fpath,"utf-8",(err,data)=>{
            if(err) 
                fail(err)
            else
                success(data)
        });
    });
}

readdata("file1.txt")
    .then((data)=>{
       console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
