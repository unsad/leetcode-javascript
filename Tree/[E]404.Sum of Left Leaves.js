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
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let res = 0;
  let helper = function(node, bool) {
    if (!node) return;
    if (bool && !node.left && !node.right) {
      res += node.val;
    }
    helper(node.left, true);
    helper(node.right, false);
  }
    helper(root.left, true);
    helper(root.right, false);
    return res;
};

/**
 * 只记录左节点的值，那么遍历时用个布尔值标记左右即可，当没有子节点且满足左时记录
 */