'use strict';

var HashPointer = require('./hash-pointer');

class Node {

  constructor(data) {
    this.data = data;
    this.next = undefined;
  }

  pointTo(node) {
    this.next = new HashPointer(node);
  }

}


module.exports = Node;
