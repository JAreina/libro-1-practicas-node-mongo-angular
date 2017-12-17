//forked from FranciscoJavierMartin/gist:8cac8ed257357157f5486ee91e0df2eb

var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const format= require('util').format;
const assert = require('assert');

const user= encodeURIComponent('juan');
const password= encodeURIComponent('juan');
const authMechanism ='DEFAULT';
const dbName="nuevayork"

//URL
const url = format('mongodb://%s:%s@localhost:27017/?authMechanism=%s',user,password,authMechanism);
//URL de la API REST
const URL_API='https://data.cityofnewyork.us/resource/i4gi-tjb9.json';

//Duracion del intervalo en milisegundos
const DURACION_INTERVALO=60000;

let fin = setInterval(()=>{

  request(URL_API, function (error, response, body) {
      if (!error && response.statusCode == 200) {

          var insertDocument = function(db, callback) {
            var lista=JSON.parse(body)

             db.collection('trafico').insertMany(lista , function(err, result) {
              if(err){
                console.console.error((err));
              }else{
                console.log("Inserted a document into the trafico collection.");
              }

              //callback();
            });
          };

          MongoClient.connect(url, function(err, mongoClient) {
            assert.equal(null, err);

            const db = mongoClient.db(dbName)
            insertDocument(db, function() {
                //db.close();
                console.log('Callback')
            });
          });
       }
  });
},DURACION_INTERVALO);