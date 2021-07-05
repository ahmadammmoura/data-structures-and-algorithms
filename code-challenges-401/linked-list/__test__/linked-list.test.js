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

describe('Linked List Insertions', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('c');
    expect(ll.head.next.value).toEqual('c');
    expect(ll.head.next.next).toEqual(null);
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    expect(ll.head.value).toEqual('a');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('c');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const ll = new LinkedList();
    ll.append('4');
    ll.append('5');
    ll.append('6');
    ll.insertBefore('5', 'tic');
    expect(ll.head.value).toEqual('4');
    expect(ll.head.next.value).toEqual('tic');
    expect(ll.head.next.next.value).toEqual('5');
    expect(ll.head.next.next.next.value).toEqual('6');
    expect(ll.head.next.next.next.next).toEqual(null);

  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertBefore('a', 'z');
    expect(ll.head.value).toEqual('z');
    expect(ll.head.next.value).toEqual('a');
    expect(ll.head.next.next.next).toEqual(null);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.append('c');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next.value).toEqual('c');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.append('a');
    ll.append('b');
    ll.insertAfter('b', 'z');
    expect(ll.head.next.value).toEqual('b');
    expect(ll.head.next.next.value).toEqual('z');
    expect(ll.head.next.next.next).toEqual(null);
  });
});
