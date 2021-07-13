const Stack = require('./stack');



class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.back = new Stack();
    this.length = 0;
  }

  enqueue(val) {
    this.back.push(val);
    this.length++;
  }

  dequeue() {
    if(this.front.length){
      this.front.pop(this.front.peek());
      this.length--;
    }else{
      while(!this.back.isEmpty()){
        this.front.push(this.back.pop());
      }
      this.front.pop();
      this.length--;
    }
  }


}

module.exports = PseudoQueue;
