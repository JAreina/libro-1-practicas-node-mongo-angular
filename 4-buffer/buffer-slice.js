//If you edit a copy, the original does not change. However, if you edit a slice, the
//original does change.


var numbers = new Buffer("123456789");
 console.log(numbers.toString());

 var slice = numbers.slice(3, 6);

 console.log(slice.toString());

 slice[0] = '#'.charCodeAt(0);
 slice[slice.length-1] = '#'.charCodeAt(0);

 console.log(slice.toString());
 console.log(numbers.toString());