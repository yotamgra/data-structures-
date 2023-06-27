class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(perant, newNode) {
    if (perant.value > newNode.value) {
      if (!perant.left) {
        perant.left = newNode;
      } else {
        this.insertNode(perant.left, newNode);
      }
    } else {
      if (!perant.right) {
        perant.right = newNode;
      } else {
        this.insertNode(perant.right, newNode);
      }
    }
  }
}
