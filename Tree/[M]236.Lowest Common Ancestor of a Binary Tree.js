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
  if (!root || p === root || q === root) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  if (left && left !== p && left !== q) return left;
  let right = lowestCommonAncestor(root.right, p, q);
  if (right && right !== p && right !== q) return right;
  if (left && right) return root;
  return left ? left : right;
};

/**
 * 235的follow up，不再限定二叉搜索树，那么需要用后序遍历对每个左右节点查找，当左右都能找到
 * 目标节点时，该节点就为所求。
 */