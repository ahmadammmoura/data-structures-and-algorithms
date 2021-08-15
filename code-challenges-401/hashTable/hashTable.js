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
}

module.exports = Hashmap;
