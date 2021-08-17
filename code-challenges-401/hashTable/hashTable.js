'use strict';

const LinkedList = require('./linkedList');

class Hashmap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  code(key) {
    const sumCharAsci = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (sumCharAsci * 13) % this.size;
  }

  add(key, value) {
    const hash = this.code(key);
    if (!this.storage[hash]) {
      const linkedList = new LinkedList();
      linkedList.prepend({ [key]: value });
      this.storage[hash] = linkedList;
    } else {
      this.storage[hash].prepend({ [key]: value });
      return this.storage[hash].head.value[key];
    }
  }

  get(key) {
    const hash = this.code(key);

    return this.storage[hash] ? this.storage[hash].getValue(key) : null ;
  }
  contains(key) {
    const hash = this.code(key);
    this.storage[hash] ? true : false;
  }

  repeatedWord(string){
    const array = string.split(' ');
    let repeated ='';
    let shouldSkip = false;
    array.forEach(word => {
      if (shouldSkip) {
        return;
      }
      word = word.split('');
      if(word[word.length -1]===','){
        word.pop();
        word = word.join('');
      }else{
        word = word.join('');
      }

      word = word.toLowerCase();
      const hash = this.code(word);
      if (!this.storage[hash]) {
        const linkedList = new LinkedList();
        linkedList.prepend({ [word]: word });
        this.storage[hash] = linkedList;


      // eslint-disable-next-line eqeqeq
      }else if(this.storage[hash].head.value[word] == word){
        shouldSkip = true;
        return repeated = word;

      }else{
        this.storage[hash].prepend({ [word]: word });
      }
    });
    return repeated;
  }

  treeIntersection(tree1, tree2) {
    if (!tree1.root && !tree2.root && !tree1 && !tree2) return 'empty tree/s';
    const arr = [];

    const addNode = (val) => {
      if (this.storage[val]) {
        this.storage[val].prepend(val);
      } else {
        const linkList = new LinkedList();
        linkList.prepend(val);
        this.storage[val] = linkList;
      }
    };

    const addTree = (node) => {
      if (node.value) addNode(node.value);
      if (node.left) addTree(node.left);
      if (node.right) addTree(node.right);
    };
    addTree(tree1.root);

    const checkIntersection = (node) => {
      if (this.storage[node.value]) {
        arr.push(node.value);
      }
      if (node.left) checkIntersection(node.left);
      if (node.right) checkIntersection(node.right);
    };
    checkIntersection(tree2.root);

    return arr;
  }
}






module.exports = {Hashmap};
