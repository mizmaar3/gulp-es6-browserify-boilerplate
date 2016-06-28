var _ = require('lodash');
var sets = require('../js/array-sets.js')();

var arrayUnion = () => {
  return _.union(sets.a, sets.b, sets.c);
};

module.exports = exports = arrayUnion;
