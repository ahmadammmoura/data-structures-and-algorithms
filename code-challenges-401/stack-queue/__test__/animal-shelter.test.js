'use strict';

const AnimalShelter = require('../animal-shelter');

describe('AnimalShelter', () => {
  it('add dogs and cat to there queue', () => {
    const animal = new AnimalShelter;
    animal.enqueue('dog');
    animal.enqueue('cat');
    animal.enqueue('cat');

    expect(animal.dogs.length).toBe(1);
    expect(animal.cats.length).toBe(2);
  });

  it('dequeue dog', () => {
    const animal = new AnimalShelter;
    animal.enqueue('dog');
    animal.enqueue('cat');
    animal.enqueue('cat');
    animal.dequeue('cat');
    animal.dequeue('dog');

    expect(animal.dogs.length).toBeFalsy();
    expect(animal.cats.length).toBe(1);
  });


  it('dequeue dog', () => {
    const animal = new AnimalShelter;
    animal.enqueue('coco');


    expect(animal.enqueue('coco')).toBe('you cant ,  only add dog or queue');
    expect(animal.cats.length).toBe(0);
    expect(animal.dogs.length).toBe(0);
  });
});
