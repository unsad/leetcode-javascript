/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let res = [];
  let out = [];
  helper(root, sum, out, res);
  return res;
};

function helper(node, sum, out, res) {
  if (!node) return;
  out.push(node.val);
  if (sum === node.val && !node.left && !node.right) {
      res.push(Array.from(out));
  }
  helper(node.left, sum - node.val, out, res);
  helper(node.right, sum - node.val, out, res);
  out.pop();
}

/**
 * 和112思路一样，区别在于需要记录满足条件的路径，那么可以用一个out数组动态记录
 */