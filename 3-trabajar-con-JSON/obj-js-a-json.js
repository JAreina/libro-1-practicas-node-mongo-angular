let libro ={
    titulo:"La poesía es buena",
    fechaPub: 2017,
    numPoemas: 100,
    autor: "Anónimo"
}

// TRANSFORMAR OBJETO JAVASCRIPT A JSON
let aJSON = JSON.stringify(libro);
console.log(aJSON);