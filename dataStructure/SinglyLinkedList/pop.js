/*

pop

    remove a node from the end of the linked list!

    pseudocode
        if there are no nodes in the list, return undefined
        loop through the list until you reach the tail
        set the next property of the 2nd to last node to be null
        set the tail to be the 2nd to last node
        decrement the length of the list by 1
        return the value of the node removed

    pop을 할 경우, tail 앞 노드의 next에 null을, this.tail에 앞 노드를 reassgin해야 되는데,
    이 때 traverse를 통해 , tail 앞 노드를 참조한다.

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
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.push(1));
console.log(linkedList.push(2));
console.log(linkedList.push(3));
console.log(linkedList);

console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList);
