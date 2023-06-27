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

  // Check if the Binary Search Tree is empty
  isEmpty() {
    return this.root === null;
  }

  // Insert a new value into the Binary Search Tree
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      // If the tree is empty, set the new node as the root
      this.root = newNode;
    } else {
      // Otherwise, call the insertNode function to find the appropriate position
      this.insertNode(this.root, newNode);
    }
  }

  // Recursive function to insert a node into the Binary Search Tree
  insertNode(parent, newNode) {
    if (parent.value > newNode.value) {
      // If the parent value is greater than the new node value, go left
      if (!parent.left) {
        // If there is no left child, set the new node as the left child
        parent.left = newNode;
      } else {
        // Otherwise, continue traversing the left subtree recursively
        this.insertNode(parent.left, newNode);
      }
    } else {
      // If the parent value is less than or equal to the new node value, go right
      if (!parent.right) {
        // If there is no right child, set the new node as the right child
        parent.right = newNode;
      } else {
        // Otherwise, continue traversing the right subtree recursively
        this.insertNode(parent.right, newNode);
      }
    }
  }

  // Search for a value in the Binary Search Tree
  search(value) {
    return this.searchNode(this.root, value);
  }

  // Recursive function to search for a value in the Binary Search Tree
  searchNode(parent, value) {
    if (!parent) {
      // If the parent is null, the value is not found in the tree
      return false;
    } else {
      if (parent.value === value) {
        // If the parent value is equal to the search value, the value is found
        return true;
      } else {
        if (parent.value > value) {
          // If the parent value is greater than the search value, search in the left subtree
          return this.searchNode(parent.left, value);
        } else {
          // If the parent value is less than the search value, search in the right subtree
          return this.searchNode(parent.right, value);
        }
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root) {
      return;
    }
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }
  max(root) {
    if (!root) {
      return null;
    }
    if (!root.right) {
      return root.value;
    }
    return this.max(root.right);
  }
}

const bts = new BinarySearchTree();
// bts.insert(10);
// bts.insert(5);
// bts.insert(15);
// bts.insert(3);
// bts.insert(7);
console.log(bts.search(10));
console.log(bts.search(5));
console.log(bts.search(15));
console.log(bts.search(20));
console.log(bts.max(bts.root));
