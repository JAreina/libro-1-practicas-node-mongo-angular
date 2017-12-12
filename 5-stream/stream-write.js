let stream = require('stream');
let util = require ('util');

util.inherits(Writer,stream.Writable);

function Writer(opt){
    stream.Writable.call(this,opt);
    this.data = new Array();
}

Writer.prototype._write = function (data,encoding,callback){
    this.data.push(data.toString('utf8'));
    console.log("aññadido : " +data);
    callback();
};

let w = new Writer();

for(let i =1 ; i<=15; i++){
     w.write("ELEMENTO "+i,'utf8');

}

w.end("FIN DE LOS ELEMENTOS");
console.log(w.data);