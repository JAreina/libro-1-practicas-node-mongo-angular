//querystring.parse(str, [sep], [eq], [options])
// modulo querystring de node


var qstring = require('querystring');

//query string a objeto javascript
var params = qstring.parse("name=Brad&color=red&color=blue");

console.log(params);
console.log("...................................")
// convertir objeto  a query string

var query = qstring.stringify(params);

console.log(query);