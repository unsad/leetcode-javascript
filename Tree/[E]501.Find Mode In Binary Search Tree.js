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
var findMode = function(root) {
  let res = [];
  let cnt = 1;
  let mx = 0;
  let pre = null;
  let search = function(node) {
      if (!node) return;
      search(node.left);
      if (pre) {
          cnt = (node.val === pre.val) ? cnt + 1 : 1;
      }
      if (cnt >= mx) {
          if (cnt > mx) res.length = 0;
          res.push(node.val);
          mx = cnt;
      }
      pre = node;
      search(node.right);
  }
  search(root);
  return res;
};

/**
 * 对二分搜索树中序遍历，因为相等的元素肯定在一起，所以用两个变量分别
 * 记录当前节点重复数量和先一个节点，每次相等时cnt加1，否则重置，再和
 * 最大值比较
 */