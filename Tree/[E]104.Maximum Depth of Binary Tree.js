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
var maxDepth = function(root) {
  return helper(root, 0);
};

function helper(node, level) {
  if (!node) return level;
  level += 1;
  return Math.max(helper(node.left, level), helper(node.right, level));
}

/**
 * 基础题，求树的最大深度，后序DFS解决
 */