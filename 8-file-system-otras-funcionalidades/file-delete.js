let fs= require('fs');



fs.unlink("ficheronuevo.txt",function(err){
    console.log(err ? "File Delete Failed"+err : "File Deleted");
})

