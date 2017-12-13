let fs= require('fs');


//fs.mkdir(path, [mode], callback)
//fs.mkdirSync(path, [mode])


//ENCADENAR CREACION SUBDIRECTORIOS


fs.mkdir("/home/juan/folderA", function(err){
    fs.mkdir("/home/juan/folderA/folderB", function(err){
    fs.mkdir("/home/juan/folderA/folderB/folderD", function(err){
    });
    });
    fs.mkdir("/home/juan/folderA/folderC", function(err){
    fs.mkdir("/home/juan/folderA/folderC/folderE", function(err){
    });
    });
    });