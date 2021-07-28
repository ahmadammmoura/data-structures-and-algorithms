'use strict';
const Node = require('../Node');
const { Tree, fizzBuzzTree } = require('../Tree');

describe('FizzBuzzTree', () => {
  let tree = new Tree(5);

  tree.root.children.push(new Node(5));
  tree.root.children[0].parent = tree;

  tree.root.children.push(new Node(3));
  tree.root.children[1].parent = tree;

  tree.root.children.push(new Node(15));
  tree.root.children[2].parent = tree;

  tree.root.children[0].children.push(new Node(1));
  tree.root.children[0].children[0].parent = tree.root.children[0];

  tree.root.children[0].children.push(new Node(5));
  tree.root.children[0].children[1].parent = tree.root.children[0];

  let newTree = fizzBuzzTree(tree);

  it('It should replace values divisible by 5 with "Buzz"', () => {
    expect(newTree.root.children[0].value).toBe('Buzz');
  });
  it('It should replace values divisible by 3 with "Fizz"', () => {
    expect(newTree.root.children[1].value).toBe('Fizz');
  });
  it('It should replace values divisible by 3 and 5 with "FizzBuzz"', () => {
    expect(newTree.root.children[2].value).toBe('FizzBuzz');
  });
  it('If the value is not divisible by 3 or 5, simply turn the number into a String.', () => {
    expect(tree.root.children[0].children[0].value).toBe('1');
  });
});
