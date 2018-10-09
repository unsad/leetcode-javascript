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
var rightSideView = function(root) {
  if (!root) return [];
  let res = [];
  let q = [root];
  while (q.length) {
      let n = q.length;
      res.push(q[n - 1].val);
      for (let i = 0; i < n; i++) {
          let cur = q.shift();
          if (cur.left) {
              q.push(cur.left);
          }
          if (cur.right) {
              q.push(cur.right);
          }
      }
  }
  return res;
};

/**
 * 层序遍历记录每层的最后一个值即可
 */