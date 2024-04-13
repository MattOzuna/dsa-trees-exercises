/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const queue = [this.root];
    let sum = 0;
    while (queue.length) {
      const currNode = queue.pop();
      if (currNode) {
        sum += currNode.val;
        queue.push(...currNode.children);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const queue = [this.root];
    let count = 0;
    while (queue.length) {
      const currNode = queue.pop();
      if (currNode) {
        if (currNode.val % 2 === 0) count++;
        queue.push(...currNode.children);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const queue = [this.root];
    let count = 0;
    while (queue.length) {
      const currNode = queue.pop();
      if (currNode) {
        if (currNode.val > lowerBound) count++;
        queue.push(...currNode.children);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
