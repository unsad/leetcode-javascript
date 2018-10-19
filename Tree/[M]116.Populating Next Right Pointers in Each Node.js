/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root) return;
  let q = [root];
  while (q.length) {
      let n = q.length;
      for (let i = 0; i < n; i++) {
          let cur = q.shift();
          cur.next = (i === n - 1) ? null : q[0];
          if (cur.left) {
              q.push(cur.left);
          }
          if (cur.right) {
              q.push(cur.right);
          }
      }
  }
};

/**
 * 层序遍历给每层加上指向下一个节点的指针即可
 */