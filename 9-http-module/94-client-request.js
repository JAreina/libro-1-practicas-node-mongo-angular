let http = require('http');
let options = {
            hostname: 'localhost',
            path: '/',
            port: '3333',
            method: 'POST'
};

let req = http.request(options, function(response){
         let  str = ''

            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                console.log(str);
                });
});
req.end();