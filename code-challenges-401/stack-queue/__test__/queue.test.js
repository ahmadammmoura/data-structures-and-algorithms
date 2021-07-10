const Queue = require('../queue');



describe('Queue', () => {
  it('implements First In first out', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
  });

  it('peek return the first value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.peek()).toEqual(1);
  });

  it('return null on empty queue', () => {
    const queue = new Queue();
    expect(queue.peek()).toBeNull();
  });

  it('isEmpty false', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.isEmpty()).toEqual(false);
  });
  it('isEmpty true', () => {
    const queue = new Queue();


    expect(queue.isEmpty()).toEqual(true);
  });

  it('point to the correct item after pop() on the stack', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
  });
});
