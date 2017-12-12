let fs = require('fs')

let planetas = ['Marte','Venus','Tierra'];

fd= fs.openSync("planetas.juan",'w');

while(planetas.length){
    planeta = planetas.pop()+" ";
    //fs.writeSync(fd, data, offset, length, position)
    let bytes = fs.writeSync(fd,planeta,null,null)
    console.log("escrito %s %dbytes",planeta, bytes)
}

fs.closeSync(fd);