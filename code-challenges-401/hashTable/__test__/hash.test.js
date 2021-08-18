const {Hashmap,leftJoin} = require('../hashTable');
const Tree = require('../../trees/binaryTree');
const Node = require('../../trees/node');


const case1 = 'Once upon a time, there was a brave princess who...';
const case2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const case3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';


describe('Hash Map', () => {
  test(' create a hash map with pre defined size', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap).toBeDefined();
    expect(hashMap.size).toBe(5000);
    expect(hashMap.storage.length).toBe(5000);
  });
});

describe('repeat ', () => {

  test(' test case 1', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case1)).toBe('a');
  });

  test(' test case 2', () => {
    const hashMap = new Hashmap(5000);

    expect(hashMap.repeatedWord(case2)).toBe('it');

  });

  test(' test case 3', () => {
    const hashMap = new Hashmap(5000);

    expect(hashMap.repeatedWord(case3)).toBe('summer');
  });
});

describe('Binary Tree Insertion', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  const seven = new Node(7);
  const one2 = new Node(1);
  const two2 = new Node(2);
  const three2 = new Node(3);
  const four2 = new Node(4);
  const seven2 = new Node(7);
  const eight = new Node(8);
  const nine = new Node(9);
  const tree1 = new Tree(one);
  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.left = six;
  three.right = seven;
  const tree2 = new Tree(one2);
  one2.left = two2;
  one2.right = three2;
  two2.left = four2;
  two2.right = eight;
  three2.left = nine;
  three2.right = seven2;

  test('Find common values in 2 binary trees.', () => {});
  const expected = [1, 2, 4, 3, 7];
  const hashMap = new Hashmap(4000);
  const arr = hashMap.treeIntersection(tree1, tree2);
  expect(arr[0]).toBe(expected[0]);
  expect(arr[1]).toBe(expected[1]);
  expect(arr[2]).toBe(expected[2]);
  expect(arr[3]).toBe(expected[3]);
  expect(arr[4]).toBe(expected[4]);
});


describe('join left tables ', () => {

  test(' test case 1', () => {
    const table1 = new Hashmap(5000);
    const table2 = new Hashmap(5000);
    table1.add('ahmad','barcelona');
    table1.add('basel','real madrid');

    table2.add('ahmad','messi');
    table2.add('basel','ronaldo');

    const matrix = [
      [ 'ahmad', 'barcelona', 'messi' ],
      [ 'basel', 'real madrid', 'ronaldo' ]
    ];

    expect(leftJoin(table1,table2)).toStrictEqual(matrix);

  });

  test(' test case 2', () => {
    const table1 = '';
    const table2 = new Hashmap();


    expect(leftJoin(table1,table2)).toStrictEqual('one of the table dose nor exist');

  });
});






