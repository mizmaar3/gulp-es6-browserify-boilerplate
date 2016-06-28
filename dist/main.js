
var arraySets = () => {
  var a = [1, 2, 3];
  var b = [4, 5, 6];
  var c = [2, 5, 3, 5];
  return { a: a, b: b, c: c };
};

module.exports = exports = arraySets;
var _ = require('lodash');
var sets = require('../js/array-sets.js')();

var arrayUnion = () => {
  return _.union(sets.a, sets.b, sets.c);
};

module.exports = exports = arrayUnion;
var mime = require('simple-mime')('unknown');

var getMime = file => {
  return mime(file);
};

module.exports = exports = getMime;
var arraySets = require('../js/array-sets')();
var arrayUnion = require('../js/array-union')();
var mimeType = require('../js/get-mime-type');

console.log('Array Sets: ');
console.table(arraySets);
console.log('Union of array sets using _.union: ', arrayUnion);

console.log('');
console.log('Mime type of example.jpg using simple-mime is found: ', mimeType('example.jpg'));
//# sourceMappingURL=main.js.map
