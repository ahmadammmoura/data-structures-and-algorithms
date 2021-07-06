const Node = require('./node');
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0 ;
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
  append(val){
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertAfter(value, newVal) {
    let newValue = new Node(newVal);

    let current = this.head;

    while (current.value !== value) {
      current = current.next;
    }
    newValue.next = current.next;
    current.next = newValue;
    this.length++;
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
    this.length++;
  }

  kthFromEnd(k) {
    let counter = 1;
    let current = this.head;

    if (this.length - k < 0) {return 'not found';}
    else if (k === this.length) {return 'not found';}
    else if (k < 0) {return 'you enterd negative number';}
    else {
      while (this.length - k > counter) {
        current = current.next;
        counter++;
      }
      if(counter !== this.length){
        return `happy path ${current.value}`;
      }else{
        return current.value;
      }

    }
  }
}

module.exports = LinkedList;
