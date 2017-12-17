


var mongoClient = require('mongodb').MongoClient

const format= require('util').format;
const assert = require('assert');

const user= encodeURIComponent('juan');
const password= encodeURIComponent('juan');
const authMechanism ='DEFAULT';
const dbName="nueva"

const datos= {
    nombre:"CAMBIADO",
    year: 2017
}

const varios= [
    {
        direccion: "CAMBIADO",
        localidad: "MADRID",
        pais: "ESPAÑA"
    },
    {
        direccion: "CAMBIADO DOS",
        localidad: "MADRID",
        pais: "ESPAÑA"
    }
]



//URL
const url = format('mongodb://%s:%s@localhost:27017/?authMechanism=%s',user,password,authMechanism);

mongoClient.connect(url,function(err, mongoClient) {

    
    const db = mongoClient.db(dbName)
    //coleccion se llama inserts la crea
    let col= db.collection('inserts');

     let r = col.findOneAndUpdate({nombre:"JAreina"},{$set:{year:2000}})



    assert.equal(null,err)
    console.log("CONNECTADO A MONGODB")


mongoClient.close();
});






