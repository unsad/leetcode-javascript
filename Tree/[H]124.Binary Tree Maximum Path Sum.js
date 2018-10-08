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
var maxPathSum = function(root) {
  let res = Number.MIN_SAFE_INTEGER;
  (function helper(node) {
      if (!node) return 0;
      let left = Math.max(helper(node.left), 0);
      let right = Math.max(helper(node.right), 0);
      res = Math.max(res, left + right + node.val);
      return Math.max(left, right) + node.val;
  })(root);
  return res;
};

/**
 * 关键在于后序回溯出每个节点满足题意的最大值，最大值应满足当前节点值加上左右分支更大的一边，
 * 当最大值为负数时可以舍弃。
 */