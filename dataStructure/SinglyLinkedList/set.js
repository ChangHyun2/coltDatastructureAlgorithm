/*

set
    should accept a value and an index
    use get function to find the specific node.
    if node is not founc, return false
    if node is found, set the value of that node to be the value passed to the function and return true
    

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
}
