const Hashmap = require('../hashTable');

const case1 = 'Once upon a time, there was a brave princess who...';
const case2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const case3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';


describe('Hash Map', () => {
  test(' create a hash map with pre defined size', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap).toBeDefined();
    expect(hashMap.size).toBe(5000);
    expect(hashMap.storage.length).toBe(5000);
  });
});

describe('repeat ', () => {

  test(' test case 1', () => {
    const hashMap = new Hashmap(5000);
    expect(hashMap.repeatedWord(case1)).toBe('a');
  });

  test(' test case 2', () => {
    const hashMap = new Hashmap(5000);

    expect(hashMap.repeatedWord(case2)).toBe('it');

  });

  test(' test case 3', () => {
    const hashMap = new Hashmap(5000);

    expect(hashMap.repeatedWord(case3)).toBe('summer');
  });
});
