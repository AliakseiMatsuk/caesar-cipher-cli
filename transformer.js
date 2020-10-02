const { Transform } = require('stream');
const { encode, decode } = require('./caesar');

class CaesarCipher extends Transform {
  constructor({ shift = 1, action = 'encode' }) {
    super();
    this.shift = shift;
    this.action = action;
    this.encode = encode;
    this.decode = decode;
  }

  _transform(data, encoding, cb) {
    this.push(this[this.action](data, this.shift));
    cb();
  }
}

module.exports = {
  CaesarCipher,
}