let stream = require('stream');
let util = require('util')


//hereada de stream la funcionalidad Readable
util.inherits(Respuestas,stream.Readable);


function Respuestas(opt){
    //crear una instancia 
    stream.Readable.call(this,opt);
    this.citas=["sí","no","quizás"];
    this._index =0;
}

Respuestas.prototype._read = function(){
    if(this._index> this.citas.length){
        this.push(null);
    }else{
        this.push(this.citas[this._index]);
        this._index +=1;
    }
}

let a = new Respuestas();
// read lee  el primer elemento del array
console.log("lectura directa: "+a.read().toString());


//eventos mientras hay "data"
a.on('data',(data)=>{
    console.log("callback lee : "+data.toString());
});

//evento end 
a.on('end', data =>{
    console.log("no más respuestas");
})

