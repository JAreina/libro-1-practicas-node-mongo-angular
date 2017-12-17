


var mongoClient = require('mongodb').MongoClient

const format= require('util').format;
const assert = require('assert');

const user= encodeURIComponent('juan');
const password= encodeURIComponent('juan');
const authMechanism ='DEFAULT';


//URL
const url = format('mongodb://%s:%s@localhost:27017/?authMechanism=%s',user,password,authMechanism);

mongoClient.connect(url,function(err, mongoClient) {

    const dbName="nueva"
    const db = mongoClient.db(dbName)

// crear collection de una bd
db.collection("colCreada",function(err,col){
    
    let r = db.collection('colEnNueva').insertOne({dato:"prueba"});
            console.log(col);
    
})

    assert.equal(null,err)
    console.log("CONNECTADO A MONGODB")


mongoClient.close();
});






