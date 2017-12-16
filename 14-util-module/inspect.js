// util.inspect(object, [options])

var obj = { first:'Caleb', last:'Dayley' };
obj.inspect = function(depth) {
return '{ name: "' + this.first + " " + this.last + '" }';
};
console.log(util.inspect(obj));
//Outputs: { name: "Caleb Dayley" }