let fs= require('fs');

//fs.truncate(path, len, callback)
//fs.truncateSync(path, len)


fs.truncate("ficheronuevo.txt",5,function(err){
    console.log(err ? "File NO TRUNCADO"+err : "File TRUNCADO");
})

