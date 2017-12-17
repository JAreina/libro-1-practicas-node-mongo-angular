


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
        nebulae.find(function(err, items){
            items.toArray((err,itemArr)=>{
                 console.log("DOCUMENTOS ARRAY : ");
                 console.log(itemArr)
            })
        })
    
    nebulae.find(function(err, items){
         items.each(function(err, item){
                    if(item){
                        console.log("Singular Document: ");
                        console.log(item);
                    }
        });
    });
    
    nebulae.findOne({type:'planetary'}, function(err, item){
         console.log("Found One: ");
         console.log(item);
         });

})
mongoClient.close();
});






