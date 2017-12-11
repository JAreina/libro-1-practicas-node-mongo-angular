//Creating a wrapper function to
//provide closure for variables needed in the //asynchronous callback

 function logCar(logMsg, callback){
            process.nextTick(function() {
            callback(logMsg);
            });
 }
 var cars = ["Ferrari", "Porsche", "Bugatti"];

 for (var idx in cars){
            var message = "Saw a " + cars[idx];
            logCar(message, function(){
            console.log("Normal Callback: " + message);
            });
 }

 /*Adding a closure wrapper
function allows the asynchronous callback to access necessary variables*/

 for (var idx in cars){
        var message = "Saw a " + cars[idx];

        (function(msg){
                logCar(msg, function(){
                console.log("Closure Callback: " + msg);
                });
        })(message);
 }