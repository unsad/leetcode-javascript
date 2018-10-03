/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let p = root;
  while (stack.length || p) {
      if (p) {
          stack.push(p);
          res.push(p.val);
          p = p.left;
      } else {
          t = stack.pop();
          p = t.right;
      }
  }  
  return res;
};

/**
 * 基础前序遍历，不用递归的实现方式
 */