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
}


const map = new Hashmap(5000);

console.log(map.repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'));




module.exports = Hashmap;
