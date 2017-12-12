let fs = require('fs');

/*
fs.writeFile(path, data, [options], callback)
fs.writeFileSync(path, data, [options])

*/
let config ={
    maxFiles:20,
    maxConnections:15,
    name: 'JAreina'
};

let configTxt=JSON.stringify(config);
let options = {
    encoding:'utf8',
    flag:'w'
};

fs.writeFile('/home/juan/fichero.txt',configTxt,options, function(err){
      if(err){
          console.log("ERROR DE ESCRITURA")
      }else{
          console.log("ESCRITO")
      }
})