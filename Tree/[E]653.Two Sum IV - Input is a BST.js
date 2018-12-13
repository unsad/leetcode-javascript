/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
	let arr = [];
	let stack = [];
	if (root) {
	    stack.push(root);
    }
    while (stack.length !== 0) {
    	root = stack.pop();
    	if (arr.indexOf(root.val) !== -1) {
    		return true;
    	} else {
    	arr.push(k - root.val);
    }
    	if (root.right) stack.push(root.right);
    	if (root.left) stack.push(root.left);	  
    }
    return false;
};

/**
 * 树类型的two sum，遍历时用个数组记录每个值求和得到目标值的另一值，同时在该数组中查询是否存在
 */