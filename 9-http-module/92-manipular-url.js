//url.resolve(from,to)

var url = require('url');
var originalUrl = 'http://user:pass@host.com:80/resource/path?query=string#hash'
var newResource = '/another/path?querynew';
console.log("ORIGINAL URL: "+originalUrl)
console.log(url.resolve(originalUrl, newResource));