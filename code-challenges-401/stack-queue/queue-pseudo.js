const Stack = require('./stack');



class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
    this.length = this.front.length + this.back.length;
  }

  enqueue(val) {
    this.front.push(val);
    this.length++;
  }

  // dequeue() {
  //   if (this.back.length) {
  //     this.length--;
  //     return this.back.pop();
  //   }

  //   this.length--;
  //   return this.back.pop();
  // }

}

module.exports = PseudoQueue;
