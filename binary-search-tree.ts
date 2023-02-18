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
    if (currentNode === null) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
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
