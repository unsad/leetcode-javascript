/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function helper(nums, l, r) {
  if (l > r) return null;
  let m = Math.floor((l + r) / 2);
  let root = new TreeNode(nums[m]);
  root.left = helper(nums, l, m - 1);
  root.right = helper(nums, m + 1, r);
  return root;
}
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  return helper(nums, 0, nums.length - 1);
};

/**
 * 排序数组转化为二叉搜索树，根节点取数组中点，左右节点递归数组两边即可
 */