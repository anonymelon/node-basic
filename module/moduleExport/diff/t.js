var as1 = require('./as1');
var as2 = require('./as2');


console.log(require('./as1')); // {}
console.log(require('./as2')); // [Function]

as1() //TypeError: object is not a function
as2()
