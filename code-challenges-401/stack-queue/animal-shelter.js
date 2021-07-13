
const Queue = require('./queue');

class AnimalShelter{
  constructor(){
    this.dogs = new Queue;
    this.cats = new Queue;
  }


  enqueue(val){
    if(val === 'dog'){
      this.dogs.enqueue(val);
    }else if(val === 'cat'){
      this.cats.enqueue(val);
    }else{
      return 'you cant ,  only add dog or queue';
    }
  }

  dequeue(pref){
    if(pref === 'dog'){
      this.dogs.dequeue();
    }else if(pref === 'cat'){
      this.cats.dequeue();
    }else{
      return 'you cant';
    }
  }

}


module.exports = AnimalShelter;

