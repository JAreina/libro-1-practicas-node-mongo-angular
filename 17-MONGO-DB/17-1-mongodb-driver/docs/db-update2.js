


var mongoClient = require('mongodb').MongoClient

const format= require('util').format;
const assert = require('assert');

const user= encodeURIComponent('juan');
const password= encodeURIComponent('juan');
const authMechanism ='DEFAULT';
const dbName="nueva"

//URL
const url = format('mongodb://%s:%s@localhost:27017/?authMechanism=%s',user,password,authMechanism);

mongoClient.connect(url,function(err, mongoClient) {

    const db = mongoClient.db(dbName)
    //RECUPERAR DOCS
    
db.collection('nebulae', function(err,nebulae){
       nebulae.findOne({type:"supernova"},function(err, item){
               
                   console.log(item);
                });
        nebulae.findOneAndUpdate({type:"supernova"},
                {$set:{type:"A"}},
               
                 function(err, result){
                   
                                     console.log(result);
                                });
                 
        });
    
mongoClient.close();
});






