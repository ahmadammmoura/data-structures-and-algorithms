const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    if (!this.top) {
      this.top = newNode;
      this.length++;
    } else {
      this.top = newNode;

      this.length++;
    }

    return this.top.value;
  }

  pop() {
    if (!this.top) return null;
    let removed = this.top;

    this.top = this.top.next;
    this.length--;
    return removed.value;
  }

  peek() {
    const peek = this.top;
    if (peek) {
      return peek.value;
    }
    return null;
  }

  isEmpty() {
    const isEmpty = this.top;

    if (isEmpty) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Stack;
