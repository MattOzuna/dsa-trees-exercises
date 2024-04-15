/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    const helper = (node) => {
      if (!node.left && !node.left) return 1;
      if (node.left === null) return helper(node.right) + 1;
      if (node.right === null) return helper(node.left) + 1;
      return Math.min(helper(node.left), helper(node.right)) + 1;
    };
    return helper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    const helper = (node) => {
      if (!node.left && !node.left) return 1;
      if (node.left === null) return helper(node.right) + 1;
      if (node.right === null) return helper(node.left) + 1;
      return Math.max(helper(node.left), helper(node.right)) + 1;
    };
    return helper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let answer = 0;
    const helper = (node) => {
      if (node === null) return 0;
      const leftSum = helper(node.left);
      const rightSum = helper(node.right);
      answer = Math.max(answer, leftSum + rightSum + node.val);
      return Math.max(rightSum + node.val, leftSum + node.val);
    };
    helper(this.root);
    return answer;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let answer = lowerBound;
    const stack = [this.root];
    while (stack.length) {
      const currNode = stack.pop();
      if (currNode) {
        if (answer === lowerBound) {
          //if the currNode Val is greater than the initial answer value,
          //change the answer to val
          answer = currNode.val > answer ? currNode.val : answer;
        } else {
          if(currNode.val < answer && currNode.val > lowerBound){
            answer = currNode.val
          }
        }
        if(currNode.left)stack.push(currNode.left)
        if(currNode.right)stack.push(currNode.right)
      }
    }
    if (answer === lowerBound) return null;
    return answer;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
