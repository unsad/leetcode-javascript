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
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let p = root;
  while (p || stack.length) {
      if (p) {
          stack.push(p);
          p = p.left;
      } else {
          let t = stack.pop();
          res.push(t.val);
          p = t.right;
      }
  }
  return res;
};

/**
 * 基础中序遍历，非递归实现
 */