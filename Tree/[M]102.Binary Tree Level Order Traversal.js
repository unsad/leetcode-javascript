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
var levelOrder = function(root) {
  let res = [];
  if (!root) return res;
  let q = [root];
  while (q.length) {
      let level = [];
      let n = q.length;
      for (let i = 0; i < n; i++) {
          let node = q.shift();
          level.push(node.val);
          if (node.left) {
              q.push(node.left);
          }
          if (node.right) {
              q.push(node.right);
          }
      }
      res.push(level);
  }
  return res;
};

/**
 * 层序遍历，适合用BFS处理
 */