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
var rob = function(root) {
  let map = new Map();
  return helper(root, map);
};

function helper(node, map) {
  if (!node) return 0;
  if (map.has(node)) {
      return map.get(node);
  }
  let val = 0;
  if (node.left) {
      val += helper(node.left.left, map) + helper(node.left.right, map);
  }
  if (node.right) {
      val += helper(node.right.left, map) + helper(node.right.right, map);
  }
  val = Math.max(val + node.val, helper(node.left, map) + helper(node.right ,map));
  map.set(node, val);
  return val;
}

/**
 * 本质上是求二叉树上不相邻的节点最大和，那么递归时对每个节点都要考虑取该节点和不取该节点两种情况，
 * 取其中最大值，防止递归时的重复计算可以新建一个map保存重复路径。
 */