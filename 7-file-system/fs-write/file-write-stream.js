//makes it easy to write data from a Readable stream source such as an HTTP request.

 let fs = require('fs');
let grains = ['wheat', 'rice', 'oats'];
let options = { encoding: 'utf8', flag: 'w' };

//fs.createWriteStream(path, [options])
let  fileWriteStream = fs.createWriteStream("grains.txt", options);

            fileWriteStream.on("close", function(){
                     console.log("File Closed.");
            });

             while (grains.length){
                    var data = grains.pop() + " ";
                    fileWriteStream.write(data);
                    console.log("Wrote: %s", data);
            }
        fileWriteStream.end()