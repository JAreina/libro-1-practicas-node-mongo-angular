var MongoClient = require('mongodb').MongoClient
, Server = require('mongodb').Server;

var mongoClient = new MongoClient(new Server('localhost', 27017));
mongoClient.connect(function(err, mongoClient) {
var db1 = mongoClient.db("libros");
console.log("CONNECTADO A MONGODB")
mongoClient.close();
});
