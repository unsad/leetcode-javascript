/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  var sum = 0;
  function traverse (root) {
      if (root === null) return;
      traverse(root.right);
      root.val = root.val + sum;
      sum = root.val;
      traverse(root.left);
  }
  traverse(root);
  return root;
};

/**
 * 由于需要累加比自己节点大的节点，那么遍历顺序需要从大到小的顺序右根左并用一个变量记录当前累加
 */