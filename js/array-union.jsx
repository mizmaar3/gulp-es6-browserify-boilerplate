var _ = require('lodash');
var sets = require('../js/array-sets.jsx')();
var mime = require('simple-mime')('unknown');

var arrayUnion = () => {
  var div = document.createElement('div');
  div.innerHTML = _.union(sets.a, sets.b, sets.c);
  document.body.appendChild(div);
  return ;
};

var getMime = (file) => {
  return mime(file)
};

top.arrayUnion = arrayUnion;
top.getMime = getMime;

module.exports = exports = arrayUnion;
