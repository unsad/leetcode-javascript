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
var postorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let p = root;
  while (p || stack.length) {
      if (p) {
          stack.push(p);
          res.unshift(p.val);
          p = p.right;
      } else {
          let t = stack.pop();
          p = t.left;
      }
  }
  return res;
};

/**
 * 基础后序遍历，因为后序是左右根，可以先用根右左的顺序遍历再翻转
 */