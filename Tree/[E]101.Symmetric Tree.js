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
var isSymmetric = function(root) {
  if (!root) return true;
  return helper(root.left, root.right);
};

function helper(left, right) {
  if (!left && !right) return true;
  if (left && !right || !left && right || left.val !== right.val) return false;
  return helper(left.left, right.right) && helper(left.right, right.left);
}

/**
 * 递归判断左右节点的子节点是否对称
 */