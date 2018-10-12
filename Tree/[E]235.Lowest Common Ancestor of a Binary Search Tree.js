/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;
  if (root.val > Math.max(p.val, q.val)) {
      return lowestCommonAncestor(root.left, p, q);
  }
  if (root.val < Math.min(p.val, q.val)) {
      return lowestCommonAncestor(root.right, p, q);
  }
  return root.val;
};

/**
 * 找到两个节点的公共祖先，DFS解决，对每个节点和目标节点比较大小，决定DFS的方向，
 * 当当前节点值大于目标值之一并小于另一个目标值时即为所求
 */