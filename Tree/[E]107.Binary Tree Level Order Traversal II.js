/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
  let res = [];
  if (root === null) return res;
  let que = [];
  que.push(root);
  while(que.length) {
      let level = [];
      let length = que.length;
      for (let i = 0; i < length; i++) {
          let node = que.shift();
          level.push(node.val);
          if (node.left) que.push(node.left);
          if (node.right) que.push(node.right);
      }
      res.unshift(level);
  }
  return res;
};

/**
 * 基础的层序遍历解决
 */