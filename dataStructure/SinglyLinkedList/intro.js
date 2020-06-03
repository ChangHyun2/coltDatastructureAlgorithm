/*

Comparisons

Lists
    don't have index
    connected via nodes witha next pointer
    random access is not allowed

Arrays
    indexed in order
    insertion and deletion can be expensive
    can quickly be accessed at a specific index

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var first = new Node("hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
