const { LinkedList } = require('../linked-list/linked-list');
const Queue = require('../stack-queue/queue');
// const Node = require('./node');
// const BinaryTree = require('./binaryTree');
function depthFirst(tree) {
  if (!tree.root) return 'empty tree';
  let node = tree.root;
  let queue = new Queue();
  let list = new LinkedList();
  queue.enqueue(node);

  while (queue.length) {
    node = queue.dequeue();
    list.append(node.value);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
  return list.toString();
}

// let root = new Node(10);
// root.left = new Node(5);
// root.left.left = new Node(3);
// root.left.left.left = new Node(2);
// let tree = new BinaryTree(root);
// console.log(depthFirst(tree));
// depthFirst(tree);

module.exports = depthFirst;
