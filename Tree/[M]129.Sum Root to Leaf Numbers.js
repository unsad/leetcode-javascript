/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  let res = [];
  let out = [];
  helper(root, res, out);
  return res.reduce((a, b) => +a + +b, 0);
};

function helper(node, res, out) {
  if (!node) return;
  out.push(node.val);
  if (!node.left && !node.right) {
      res.push(out.join(''));
  }
  helper(node.left, res, out);
  helper(node.right, res, out);
  out.pop();
}

/**
 * 记录根到叶形成数字的总数，那么需要用一个out数组记录每次遍历到根时形成的数字，
 * 并存到res中，遍历完成累加res获取结果
 */