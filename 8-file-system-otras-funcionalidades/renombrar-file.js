let fs= require('fs');


//fs.rename(oldPath, newPath, callback)
//fs.renameSync(oldPath, newPath)


fs.rename("old.txt", "new.txt", function(err){
    console.log(err ? "Rename Failed" : "File Renamed");
    });
    fs.rename("testDir", "renamedDir", function(err){
    console.log(err ? "Rename Failed" : "Folder Renamed");
    });