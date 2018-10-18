/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  return (function helper(root) {
      if (!root) return -1;
      let val = helper(root.left);
      if (k === 0) return val;
      if (--k === 0) return root.val;
      return helper(root.right);
  })(root)
};

/**
 * 求二叉搜索树中第k大的数，那么中序按从小到大顺序遍历即可，用参数k计数
 */