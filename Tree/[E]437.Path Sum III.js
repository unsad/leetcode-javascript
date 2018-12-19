/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function helper(node, sum) {
  let res = 0;
  if (!node) return res;
  if (node.val === sum) res++;
  res += helper(node.left, sum - node.val);
  res += helper(node.right, sum - node.val);
  return res;
}
var pathSum = function(root, sum) {
  if (!root) return 0;
  return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum); 
};

/**
 * 分别针对每个节点都求解，求解用常规后序遍历
 */