

//poner el json en una sola linea
let planeta='{"name" : "Tierra","habitantes" : "MILLONES Y MILLONES","recursos" : ["limitados","ilimitados"]}';


let a = JSON.parse(planeta);
console.log(a.habitantes);
console.log(a.recursos);
