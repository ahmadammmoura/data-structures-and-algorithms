
'use strict';
// const Node = require('./node');
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    var data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  postOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  inOrder() {
    var data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  findMax() {
    if(!this.root){
      return 'empty tree';
    }
    const arr = this.preOrder();
    let node = arr[0];
    arr.forEach(num =>{
      if(num>node){
        node = num;
      }
    });
    return node;
  }
}

// let root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(3);
// root.right.right = new Node(20);
// root.right.left = new Node(188);
// root.left.left.left = new Node(2);
// let tree = new BinaryTree(root);

// console.log(tree.findMax());

module.exports = BinaryTree;
