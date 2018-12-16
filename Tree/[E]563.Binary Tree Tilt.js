/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  let res = 0;
  (function postorder(node) {
    if (!node) return 0;
    let leftSum = postorder(node.left, res);
    let rightSum = postorder(node.right, res);
    res += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + node.val;
  })(root);
  return res;
};

/**
 * 涉及到子树累加值的计算，后序遍历
 */