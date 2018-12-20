/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSame(s, t) {
  if (!s && !t) return true;    
  if (!s || !t) return false;
  if (s.val !== t.val) return false;
  return isSame(s.left, t.left) && isSame(s.right, t.right);
}

var isSubtree = function(s, t) {
  if (!s) return false;
  if (isSame(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

/**
 * 首先用递归写一个判断相等树的帮助函数，再对原树的所有子树递归判断是否和目标树相等
 */