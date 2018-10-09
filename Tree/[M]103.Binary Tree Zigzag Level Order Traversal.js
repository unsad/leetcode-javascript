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
var zigzagLevelOrder = function(root) {
  let res = [];
  if (!root) return res;
  let q = [root];
  let bool = true;
  while (q.length) {
      let n = q.length;
      let cnt = [];
      for (let i = 0; i < n; i++) {
          let cur = q.shift();
          if (cur.left) {
              q.push(cur.left);
          }
          if (cur.right) {
              q.push(cur.right);
          }
          cnt.push(cur.val);
      }
      res.push(bool ? cnt : cnt.reverse());
      bool = !bool;
  }
  return res;
};

/**
 * 层序遍历上稍微做点处理，用个布尔值记录奇偶，决定保存顺序
 */