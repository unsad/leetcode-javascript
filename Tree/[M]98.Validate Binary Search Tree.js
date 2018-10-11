/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
	return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function helper(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return helper(node.left, min, node.val) && helper(node.right, node.val, max);
}

/**
 * 验证二叉搜索树，DFS按二叉搜索树性质检测即可
 */