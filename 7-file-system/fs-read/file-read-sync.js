 var fs = require('fs');

 fd = fs.openSync('../fs-write/planetas.juan', 'r');

 var planetas = "";
 do {
        var buf = new Buffer(5);
         buf.fill();
         //fs.readSync(fd, buffer, offset, length, position)
        var bytes = fs.readSync(fd, buf, null, 5);
        console.log("read %dbytes", bytes);
        planetas += buf.toString();
 } while (bytes > 0);
 
 
 fs.closeSync(fd);
 console.log("LECTURA " + planetas);