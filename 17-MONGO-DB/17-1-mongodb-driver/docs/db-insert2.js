var mongoClient = require('mongodb').MongoClient

const format= require('util').format;
const assert = require('assert');

const user= encodeURIComponent('juan');
const password= encodeURIComponent('juan');
const authMechanism ='DEFAULT';
const dbName="nueva"



function addObject(collection, object){
     collection.insertOne(object, function(err, result){
            if(!err){
                console.log("Inserted : ");
                console.log(result);
            }
            });
     }


//URL
const url = format('mongodb://%s:%s@localhost:27017/?authMechanism=%s',user,password,authMechanism);

mongoClient.connect(url,function(err, mongoClient) {

    const db = mongoClient.db(dbName)
    db.collection("nebulae", function(err, nebulae){
       
        addObject(nebulae, {ngc:"NGC 7293", name:"Helix",
         type:"planetary",location:"Aquila"});
       
         addObject(nebulae, {ngc:"NGC 6543", name:"Cat's Eye",
         type:"planetary",location:"Draco"});
       
         addObject(nebulae, {ngc:"NGC 1952", name: "Crab",
         type:"supernova",location:"Taurus"});
         });
    
    
         console.log("CONNECTADO A MONGODB")


mongoClient.close();
});

/*
COMPROBAR INSERCION EN SHELL

show dbs;
use nueva;
show collections;
db.getCollection('nebulae').find().pretty();



*/




