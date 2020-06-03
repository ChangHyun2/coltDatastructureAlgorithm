/*

shift

    if(!head) return undefined
    temp = head
    head.next = head
    length--
    return temp

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

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    newTail.next = null;
    this.tail = newTail;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
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
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.push(1));
console.log(linkedList.push(2));
console.log(linkedList.push(3));
console.log(linkedList);

console.log(linkedList.pop());
console.log(linkedList.shift());
console.log(linkedList.shift());
console.log(linkedList);
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList);
