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
var longestUnivaluePath = function(root) {
  if (!root) return 0;
  let sub = Math.max(longestUnivaluePath(root.left), longestUnivaluePath(root.right));
  return Math.max(sub, helper(root.left, root.val) + helper(root.right, root.val));
};

function helper(node, parent) {
  if (!node || node.val !== parent) return 0;
  return 1 + Math.max(helper(node.left, node.val), helper(node.right, node.val))
}

/**
 * 分三种情况讨论，一种是左子树的最长题解，一种是右子树的最长题解，一种是以根节点为目标值的跨越左右子树的最长题解
 */