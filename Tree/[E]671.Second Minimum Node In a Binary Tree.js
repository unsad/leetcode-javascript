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
function helper(node, val) {
  if (!node) return Number.MAX_VALUE;
  if (node.val !== val) return node.val;
 return Math.min(helper(node.left, val),  helper(node.right, val)) ;

}
var findSecondMinimumValue = function(root) {
 let res = helper(root, root.val);
 return res === Number.MAX_VALUE ? -1 : res; 
};

/**
 * 返回第二小的值，根节点一定是最小的，目的就是找到除根节点外最小的数，则递归
 * 获取左右子树最小的节点即可
 */