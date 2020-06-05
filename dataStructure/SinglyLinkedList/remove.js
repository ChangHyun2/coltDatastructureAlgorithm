/*

remove
    
    if length<index<0 , return undefined
    if index is length-1, pop
    if index is 0, shift
    otherwise, get method, access node at the index -1
    set the next property on that node to be the next of the next node



*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  push(val) {
    // append
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    let removedNode = this.tail;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
      return removedNode.val;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    current.next = null;
    this.tail = current;

    return removedNode.val;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const removedHead = this.head;
    this.head = removedHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return removedHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  setNode(index, value) {
    const node = this.getNode(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;

    return removed;
  }
}
