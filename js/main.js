var arraySets = require('../js/array-sets')();
var arrayUnion = require('../js/array-union')();
var mimeType = require('../js/get-mime-type');

console.log('Array Sets: ');
console.table(arraySets);
console.log('Union of array sets using _.union: ', arrayUnion);

console.log('');
console.log('Mime type of example.jpg using simple-mime is found: ', mimeType('example.jpg') );
