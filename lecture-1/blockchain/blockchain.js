'use strict';

var Node = require('./node');

class Blockchain {

  constructor () {
    // hash pointer to the first node in the list
    this.root = undefined;
  }

  addBlock(data) {
    // if this is the first node in the chain
    if (!this.root) {
      let node = new Node(data);
      this.root = node;
      return;
    }

    // if it's not the first node in the chain
    let node = new Node(data);
    node.pointTo(this.root);
    this.root = node;
  }

  validate() {
    var nodeCount = 0;
    var currentNode = this.root;
    while (currentNode) {
      console.log('data : ' + JSON.stringify(currentNode.data));
      console.log(' --> ');

      if (currentNode.next.isValid()) {
        currentNode = currentNode.next.pointer;
      }
      else {
        console.log('Invalid hash pointer!');
        break;
      }
    }
    console.log('..end..');
  }

}


module.exports = Blockchain;
