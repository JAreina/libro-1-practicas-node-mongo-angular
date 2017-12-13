let fs = require('fs');

function leerFruta(fd, frutas){
    let buf= new Buffer(5);
    buf.fill();

    //fs.read(fd, buffer, offset, length, position, callback)
    fs.read(fd,buf,0,5,null,function(err,bytes,data){
        if(bytes>0){
            console.log("leido %dbytes",bytes);
            frutas +=data;
            leerFruta(fd,frutas)
        }else{
            fs.close(fd);
            console.log("FRUTAS: %s",frutas)
        }
    })
}

fs.open('../fs-write/fruit.txt','r',function(err,fd){
    leerFruta(fd,"")
})