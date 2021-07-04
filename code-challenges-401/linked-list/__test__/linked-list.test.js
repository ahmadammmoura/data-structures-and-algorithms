'use strict';
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const linkList = new LinkedList();
    expect(linkList).toBeDefined();
    expect(linkList.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    const linkList = new LinkedList();
    linkList.insert('a');
    expect(linkList.head.value).toEqual('a');
    expect(linkList.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    const linkList = new LinkedList();
    linkList.insert('a');
    linkList.insert('b');
    expect(linkList.head.value).toEqual('b');
    expect(linkList.head.next.value).toEqual('a');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    const linkList = new LinkedList();
    linkList.insert('a');
    linkList.insert('b');
    linkList.insert('c');
    expect(linkList.head.value).toBeDefined();
    expect(linkList.head.next.value).toBeDefined();
    expect(linkList.head.next.next.value).toBeDefined();
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    const linkList = new LinkedList();
    linkList.insert('a');
    linkList.insert('b');
    linkList.insert('c');
    expect(linkList.includes('a')).toBeTruthy();
    expect(linkList.includes('w')).toBeFalsy();
    expect(linkList.includes('b')).toBeTruthy();
    expect(linkList.includes('c')).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const linkList = new LinkedList();
    linkList.insert('a');
    expect(linkList.includes('b')).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkList = new LinkedList();
    linkList.insert('a');
    linkList.insert('b');
    linkList.insert('c');
    expect(linkList.toString()).toBeDefined();
    expect(linkList.toString().length).toBeGreaterThan(0);
    expect(linkList.toString()).toEqual('{c}->{b}->{a}->NULL');
  });
});
