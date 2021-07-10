const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    return this.length++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    let removed = this.front;

    if (this.front === this.back) {
      this.back = null;
    }
    this.front = this.front.next;
    this.length--;
    return removed.value;
  }

  peek() {
    const peek = this.front;
    if (peek) {
      return peek.value;
    }
    return null;
  }

  isEmpty() {
    const isEmpty = this.front;

    if (isEmpty) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Queue;
