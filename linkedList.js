class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  //O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  //O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next) {
        if (prev.next.value === value) {
          prev.next = prev.next.next;
          this.size--;
          return value;
        }
        prev = prev.next;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let curr = this.head;
    for (let i = 0; i < this.size; i++) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
    }
    return -1;
  }

  reverse() {
    if (this.isEmpty()) {
      return;
    }
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  prependWithTail(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  appendWithTail(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    let removedValue = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return removedValue;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let removedValue = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
    //   while (prev.next !== this.tail)
        for (let i = 0; i < this.size - 2; i++) {
          prev = prev.next;
        }
      this.tail = prev;
      this.tail.next = null;
    }
    this.size--;
    return removedValue;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let listValue = "";
      while (curr) {
        listValue += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.insert(1.5, 0);
// console.log("remove ", list.removeValue(3));
// list.appendWithTail(1);
// list.appendWithTail(2);
// list.appendWithTail(3);
// list.prependWithTail(1);
// list.prependWithTail(2);
// list.prependWithTail(3);
// console.log(list.getSize());
// console.log(list.search(2));
// console.log("removed ", list.removeFromEnd());
// console.log("tail", list.tail?.value);
// console.log("head", list.head?.value);

// list.print();
// list.reverse();


module.exports = LinkedList