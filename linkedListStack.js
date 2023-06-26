const LinkedList = require("./linkedList.js");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.prependWithTail(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peak() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();

console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.peak());
stack.pop()
stack.pop()
stack.print();
