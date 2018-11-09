/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) return '';
  let ans = t.val;
  if (t.left) {
      ans += `(${tree2str(t.left)})`;
  } else {
       if (t.right) {
      ans += `()`;
  }
  }
  if (t.right) {
      ans += `(${tree2str(t.right)})`;
  }
  return ans.toString();
};

/**
 * 二叉树转字符串表示，常规深度遍历处理
 */