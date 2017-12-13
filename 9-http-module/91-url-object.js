//url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
/*
urlStr     String 
parseQueryString Boolean  default es true
slashesDenoteHost Boolean cambia el formato de la url DEFAULT FALSE

url.format(urlObj)
*/
var url = require('url');
var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash'
var urlObj = url.parse(urlStr, true, false);

//pasar a string obj
urlString = url.format(urlObj)

console.log(urlObj.host);