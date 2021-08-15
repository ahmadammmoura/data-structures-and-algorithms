const Node = require('./node');


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }
}

module.exports = LinkedList;
