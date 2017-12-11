
// concatener buffers

// concat(list, [totalLength])




let a = new Buffer("En un lugar ");
let b = new Buffer("de la Mancha...");
let c = new Buffer("CERVANTES");


console.log(Buffer.concat([a,b,c]).toString());


