class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.fist = newNode;
      this.last = newNode;
      this.size = 1;
      return this;
    }

    const originFirst = this.first;
    this.first = newNode;
    this.first.next = originFirst;

    return ++this.size;
  }

  pop(value) {
    if (!this.first) {
      return null;
    }

    const originFirst = this.first;
    this.first = this.first.next;

    if (this.size === 1) {
      this.last = null;
    }

    this.size--;
    return originFirst;
  }
}

const stack = new stack();
stack.push("first");
stack.push("2nd");
console.log(stack);
