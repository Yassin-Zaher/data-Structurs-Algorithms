class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }

    const currentNode = this.root;
    while (true) {
      if (value > currentNode) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return currentNode;
      }

      // if we didn't return from the function;
      return false;
    }
  }

  // remove an item
  remove(value) {
    if (!this.root) {
      return null;
    }
    currentNode = this.root;
    parentNode = null;
    while (true) {
      if (value > currentNode.value) {
        // right
      }
    }
  }

  BreathFirstSearch() {
    let list = [];
    let currentNode = this.root;
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      list.push(currentNode.value);
    }
  }

  BreathFirstSearchR(queue, list) {
    currentNode = queue.shift();

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    list.push(currentNode.value);

    return this.BreathFirstSearchR(queue, list);
  }
}

// using recursion
