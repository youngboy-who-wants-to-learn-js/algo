class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right;
      }
    }
  }

  preOrder(node, cb) {
    if (!node) {
      return;
    }

    if (cb) {
      cb(node);
    }

    this.preOrder(node.left, cb);
    this.preOrder(node.right, cb);
  }

  inOrder(node, cb) {
    if (!node) {
      return;
    }

    this.preOrder(node.left, cb);
    if (cb) {
      cb(node);
    }
    this.preOrder(node.right, cb);
  }

  postOrder(node, cb) {
    if (!node) {
      return;
    }

    this.preOrder(node.left, cb);
    this.preOrder(node.right, cb);
    if (cb) {
      cb(node);
    }
  }

  // в ширину
  traverseDFS(cb, method) {
    switch (method) {
      case "preOrder":
        this.preOrder(this.root, cb);
        return;
      case "inOrder":
        this.inOrder(this.root, cb);
        return;
      case "postOrder":
        this.postOrder(this.root, cb);
        return;

      default:
        break;
    }
  }

  // в глубину
  traverseBFS(cb) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      cb(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }
}

const myTree = new BinaryTree();
myTree.add(20);
myTree.add(15);
myTree.add(25);
myTree.add(11);
myTree.add(18);
myTree.add(21);
myTree.add(30);
myTree.add(3);
myTree.add(12);
myTree.add(13);
myTree.add(19);
myTree.remove(25);
console.log(myTree);
