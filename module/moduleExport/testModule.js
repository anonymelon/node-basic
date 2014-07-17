
var funA = function () {
  console.log(' function A');
}

var funB = function () {
  console.log(' function B');
}

var funC = function () {
  console.log(' function C');
}


module.exports.funA = funA;
module.exports.funB = funB;
module.exports.funCAlias = funC;
module.exports.pi = Math.PI;
