/* eslint-disable no-dupe-else-if */
const Node = require('./Node');
const Queue = require('../stack-queue/queue');

class Tree {
  constructor(value) {
    var node = new Node(value);
    this.root = node;
  }
}



function fizzBuzzTree(tree) {
  let currentNode = tree.root;
  let queue = new Queue();
  while (currentNode) {
    for (let i = 0; i < currentNode.children.length; i++) {
      queue.enqueue(currentNode.children[i]);
    }
    if (currentNode.value % 5 === 0 && currentNode.value % 3 === 0) {
      currentNode.value = 'FizzBuzz';
    } else if (currentNode.value % 5 === 0) {
      currentNode.value = 'Buzz';
    } else if (currentNode.value % 3 === 0) {
      currentNode.value = 'Fizz';
    } else {
      currentNode.value = String(currentNode.value);
    }
    currentNode = queue.dequeue();
  }
  let newTree = tree;
  return newTree;
}


module.exports = {Tree,fizzBuzzTree};
