'use strict';

const PseudoQueue = require('../queue-pseudo');

describe('queue-pseudo', () => {
  it('enqueue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.length).toBe(2);
  });

  // it('dequeue', () => {
  //   let queue = new PseudoQueue();
  //   queue.enqueue(1);
  //   queue.enqueue(2);
  //   queue.enqueue(3);
  //   queue.dequeue();
  //   queue.dequeue();
  //   expect(queue.length).toBe(1);
  // });

  // it('dequeue all items', () => {
  //   let queue = new PseudoQueue();
  //   queue.enqueue(1);
  //   queue.enqueue(2);
  //   queue.enqueue(3);
  //   queue.dequeue();
  //   queue.dequeue();
  //   queue.dequeue();
  //   expect(queue.length).toBe(0);
  // });

});
