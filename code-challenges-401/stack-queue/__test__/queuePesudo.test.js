'use strict';

const PseudoQueue = require('../queue-pseudo');

describe('Queue Pseudo', () => {
  it('enqueue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    expect(queue.length).toBe(3);
  });
  it('enqueue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    queue.dequeue();
    expect(queue.front.peek()).toBe('c');
  });

  it('dequeue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    expect(queue.length).toBe(2);
  });
  it('dequeue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue();
    expect(queue.front.peek()).toBe('b');
  });

  it('dequeue all items ', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.length).toBe(0);
  });

});
