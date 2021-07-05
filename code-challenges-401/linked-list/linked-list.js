const Node = require("./node");
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
    let string = "";
    while (current) {
      string += `{${current.value}}->`;
      current = current.next;
      if (!current) {
        string += "NULL";
      }
    }
    return string;
  }

  includes(val) {
    let current = this.head;
    while (current) {
      if (current.value === val) {
        return true;
      }
      current = current.next;
    }
    if (current === undefined) {
      return false;
    }
  }
  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAfter(value, newVal) {
    let newValue = new Node(newVal);

    let current = this.head;

    while (current.value !== value) {
      current = current.next;
    }
    newValue.next = current.next;
    current.next = newValue;
  }

  insertBefore(value, newVal) {
    let newNode = new Node(newVal);

    let current = this.head;

    if (current.value === value) {
      this.head = newNode;
      newNode.next = current;
    } else {
      while (current.value !== value) {
        if (current.next.value === value) {
          newNode.next = current.next;
          // console.log(newNode)
          current.next = newNode;
          return this.toString();
        }
        current = current.next;
      }
    }
  }
}

module.exports = LinkedList;
