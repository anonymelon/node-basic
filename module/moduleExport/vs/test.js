
// Here is an eye-opener - module.exports is the real deal.
// exports is just module.exports's little helper.
// Your module returns module.exports to the caller ultimately,
// not exports. All exports does is collect properties and
// attach them to module.exports IF module.exports doesn't
// have something on it already. If there's something attached
// to module.exports already, everything on exports is ignored.

var exp = require('./exports');
var modExp = require('./moduleExports');
var modExpOve = require('./moduleExportsOverwrite');

console.log(module.exports === exports); // true

exp.sayName('jeremy');
modExp.sayName('jeremy');
console.log(modExp.config);
// modExpOve.sayName('jeremy'); //Object Overwrited!! has no method 'sayName'
