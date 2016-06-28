var mime = require('simple-mime')('unknown');

var getMime = (file) => {
  return mime(file)
};

module.exports = exports = getMime;
