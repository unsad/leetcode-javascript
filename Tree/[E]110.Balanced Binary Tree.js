/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function check(node) {
  if (!node) return 0;
  let left = check(node.left);
  if (left === -1) return -1;
  let right = check(node.right);
  if (right === -1) return -1;
  if (Math.abs(left - right) > 1) return -1;
  return 1 + Math.max(left, right);
}
var isBalanced = function(root) {
  if (check(root) === -1) return false;
  return true;
};

/**
 * 检查二叉平衡树，关键在于后序回溯出每个节点的深度判断
 */