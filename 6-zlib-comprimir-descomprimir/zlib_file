var zlib = require("zlib");
var fs = require("fs");

var gzip = zlib.createGzip();

var inFile = fs.createReadStream("zlib_file.js");
var outFile = fs.createWriteStream("zlib_file.gz");

inFile
  .pipe(gzip)
  .pipe(outFile)
  .on("finish", function() {
    console.log("COMPRIMIDO");
  });

/*DESCOMPRIMIR  da error
var gunzip = zlib.createGunzip();
let comprimido = fs.createReadStream("zlib_file.gz");

comprimido
  .pipe(gunzip)
  .pipe(fs.createWriteStream("descomprimido"))
  .on("error", function() {
    console.log("DESCOMPRIMIDO");
  });*/
