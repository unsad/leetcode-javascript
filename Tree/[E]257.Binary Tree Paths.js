/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = [];
  if (root) {
      helper(root, '', res);
  }
  return res;
};

function helper(node, out, res) {
  if (!node.left && !node.right) {
      res.push(out + node.val);
  }
  if (node.left) {
      helper(node.left, out + node.val + '->' , res);
  }
   if (node.right) {
      helper(node.right, out + node.val + '->' , res);
  }
}

/**
 * 递归的同时记录当前路径，没有子节点时记录结果
 */