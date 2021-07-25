'use strict';

const Node = require('../node');
const BinaryTree = require('../binaryTree');
const BST = require('../binarySearchTree');


describe('node test', () => {
  it('creat a node with left and right  ', () => {
    const val = 'x';
    const node = new Node(val);

    expect(node.value).toBe(val);
    expect(node.right).toBeNull();
    expect(node.left).toBeNull();
  });
});

describe('binary tree test', () => {
  it('crate a tree ', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it('PreOrder', () => {
    let root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);
    let tree = new BinaryTree(root);

    const result = [10, 5, 15];
    expect(tree.preOrder()).toEqual(result);
  });

  it('inOrder', () => {
    let root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);
    let tree = new BinaryTree(root);

    const result = [5,10,15];
    expect(tree.inOrder()).toEqual(result);
  });

  it('postOrder', () => {
    let root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);
    let tree = new BinaryTree(root);

    const result = [5,15,10];
    expect(tree.postOrder()).toEqual(result);
  });
});


describe('binary tree search', () => {
  it('add a new node to an empty tree', () => {
    const binarySearchTree = new BST();
    expect(binarySearchTree.root).toEqual(null);
    binarySearchTree.add(10);
    binarySearchTree.add(15);
    binarySearchTree.add(5);
    binarySearchTree.add(20);
    expect(binarySearchTree.root.value).toEqual(10);
  });
  it('bigger add to the rigth and small add to the left', () => {
    const binarySearchTree = new BST();
    binarySearchTree.add(10);
    binarySearchTree.add(15);
    binarySearchTree.add(5);
    binarySearchTree.add(20);
    expect(binarySearchTree.root.right.value).toEqual(15);
    expect(binarySearchTree.root.left.value).toEqual(5);
    expect(binarySearchTree.root.right.right.value).toEqual(20);
  });

  it('if the tree contains return true else false', () => {
    const binarySearchTree = new BST();
    binarySearchTree.add(10);
    binarySearchTree.add(15);
    binarySearchTree.add(5);
    binarySearchTree.add(20);
    expect(binarySearchTree.contains(5)).toEqual(true);
    expect(binarySearchTree.contains(20)).toEqual(true);
    expect(binarySearchTree.contains(88)).toEqual(false);
  });
});


describe('FIND MAX TEST', () => {
  it('RETURN empty tree IF THE TREE EMPTY', () => {

    let tree = new BinaryTree();

    expect(tree.findMax()).toEqual('empty tree');

  });
  it('if theres no rigth in the tree must return the root node value', () => {
    let root = new Node(10);
    root.left = new Node(5);
    root.left.left = new Node(3);
    root.left.left.left = new Node(2);
    let tree = new BinaryTree(root);
    expect(tree.findMax()).toEqual(10);
  });

  it('return the max number in the tree', () => {
    let root = new Node(10);
    root.left = new Node(5);
    root.right = new Node(15);
    root.left.left = new Node(3);
    root.right.right = new Node(20);
    root.right.left = new Node(14);
    root.left.left.left = new Node(2);
    let tree = new BinaryTree(root);
    expect(tree.findMax()).toEqual(20);
  });
});
