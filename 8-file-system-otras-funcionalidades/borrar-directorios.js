let fs= require('fs');


//fs.rmdir(path, callback)
//fs.rmdirSync(path)


//borrar  SUBDIRECTORIOS


fs.rmdir("/home/juan/folderA/folderB/folderC", function(err){
    fs.rmdir("/home/juan/folderA/folderB", function(err){
    fs.rmdir("/home/juan/folderD", function(err){
    });
    });
    fs.rmdir("/home/juan/folderA/folderC", function(err){
    fs.rmdir("/home/juan/folderE", function(err){
    });
    });
    });