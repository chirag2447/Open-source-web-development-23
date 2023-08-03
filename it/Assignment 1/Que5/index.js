var fs=require('fs');
var zlib=require('zlib');

fs.createReadStream('../files/file.txt.gz').pipe(zlib.createGunzip());


console.log('File Compressed too zip');