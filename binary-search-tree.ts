// Do not change this
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(val: number, currentNode = this.root) {
    if (currentNode === null) {
      this.root = new TreeNode(val);
    } else if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val);
        return;
      }
      this.insert(val, currentNode.left);
    } else {
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val);
        return;
      }
      this.insert(val, currentNode.right);
    }
  }

  search(val: number): boolean {
    let current = this.root;
    while (current !== null) {
      if (val === current.val) return true;
      if (val < current.val) {
        current = current.left;
        continue;
      }
      if (val > current.val) current = current.right;
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}
