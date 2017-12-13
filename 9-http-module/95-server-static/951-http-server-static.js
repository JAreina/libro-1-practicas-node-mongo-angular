let fs =require('fs');
let url = require('url');
let http = require('http');
let ROOT_DIR = "/html";


http.createServer(function (req, res) {
       //<<handle the request and response here>>
       let urlObj= url.parse(req.url,true,false);
       fs.readFile(ROOT_DIR+urlObj.pathname,function(err,data){
           if(err){
               res.writeHead(404);
               res.end(JSON.stringify(err));
               return;
           }
           res.writeHead(200);
           res.end(data);
       })
       console.log("servidor escuchando");
}).listen(8089);