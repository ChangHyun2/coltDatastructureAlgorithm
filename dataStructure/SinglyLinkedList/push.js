/*

accept a value
create a new node (value)
if no head, set the head and tail with new node
otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
increment the length 

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
}
