


var mongoClient = require('mongodb').MongoClient

const format= require('util').format;
const assert = require('assert');

const user= encodeURIComponent('juan');
const password= encodeURIComponent('juan');
const authMechanism ='DEFAULT';
const dbName="nueva"

const datos= {
    nombre:"JAreina",
    year: 2018
}

const varios= [
    {
        direccion: "direccion nº 11",
        localidad: "MADRID",
        pais: "ESPAÑA"
    },
    {
        direccion: "direccion nº 12",
        localidad: "MADRID",
        pais: "ESPAÑA"
    }
]



//URL
const url = format('mongodb://%s:%s@localhost:27017/?authMechanism=%s',user,password,authMechanism);

mongoClient.connect(url,function(err, mongoClient) {

    const db = mongoClient.db(dbName)
    //coleccion se llama inserts la crea
    let r = db.collection('inserts').insertOne(datos);

  // inserta varios
  r = db.collection('micollection').insertMany(varios)
    assert.equal(null,err)
    console.log("CONNECTADO A MONGODB")


mongoClient.close();
});






