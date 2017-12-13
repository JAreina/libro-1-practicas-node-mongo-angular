let fs = require('fs');
 
let  options = { encoding: 'utf8', flag: 'r' };

//fs.createReadStream(path, [options])
let  fileReadStream = fs.createReadStream("../fs-write/grains.txt", options);

fileReadStream.on('data', function(chunk) {
         console.log('Grains: %s', chunk);
        console.log('Read %d bytes of data.', chunk.length);
 });

 fileReadStream.on("close", function(){
                        console.log("File Closed.");
 });