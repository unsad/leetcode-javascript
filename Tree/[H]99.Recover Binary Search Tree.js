/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let list = [];
  let val = [];
  helper(root, list, val);
  val.sort((a, b) => a - b);
  for (let i = 0; i < list.length; i++) {
      list[i].val = val[i];
  }
};

function helper(root, list, val) {
  if (!root) return;
  helper(root.left, list, val);
  list.push(root);
  val.push(root.val);
  helper(root.right, list, val);
}

/**
 * 修复有问题的二叉搜索树，可以用中序遍历获取当前节点值排序，再人为排序获取正确二叉树的顺序，
 * 两者比较修复错误位置
 */