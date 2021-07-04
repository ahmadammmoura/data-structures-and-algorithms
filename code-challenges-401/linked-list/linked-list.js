const Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{${current.value}}->`;
      current = current.next;
      if (!current) {
        string += 'NULL';
      }
    }
    return string;
  }

  includes(val) {
    let current = this.head;
    while(current){
      if(current.value === val) {
        return true;
      }
      current = current.next;
    }
    if (current === undefined){
      return false;
    }
  }
}



module.exports = LinkedList;
