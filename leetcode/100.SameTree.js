/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if(p === null && q === null) {
    return true;
  } else if(
    (p === null && q !== null) ||
    (p !== null && q === null)
  ) {
    return false;
  }
  if(p.val !== q.val ||
    !isSameTree(p.left, q.left) ||
    !isSameTree(p.right, q.right)
  ) {
    return false;
  } else {
    return true;
  }
};