'use strict';

const hash = require('./../hash');

class HashPointer {

  constructor(obj) {
    if (typeof obj !== 'object')
      throw new Error('obj is not a valid pointer to an object');

    this.hash = hash.create(JSON.stringify(obj));
    this.pointer = obj;
  }

  isValid() {
    return hash.create(JSON.stringify(this.pointer)) === this.hash;
  }

}


module.exports = HashPointer;
