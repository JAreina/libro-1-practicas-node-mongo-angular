

// verificar que existe un fichero

let fs = require('fs');
let existe;
let ruta='../7-file-system/fs-write/frduit.txt';

existe = fs.exists(ruta,function(exists){
    console.log(exists
                      ?  "EXISTE"
                      :"No existe el fichero")
})