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
var diameterOfBinaryTree = function(root) {
  let res = 1;
  function helper(node) {
      if (node === null) return 0;
      let left = helper(node.left);
      let right = helper(node.right);
      res = Math.max(res, left + right + 1);
      return Math.max(left, right) + 1;
  }
  helper(root);
  return res - 1;
};

/**
 * 常规后序遍历更新最值，并返回当前深度
 */