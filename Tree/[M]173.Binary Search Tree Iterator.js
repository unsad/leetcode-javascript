/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.stack = [];
  while (root) {
      this.stack.push(root);
      root = root.left;
  }
};


/**
* @this BSTIterator
* @returns {boolean} - whether we have a next smallest number
*/
BSTIterator.prototype.hasNext = function() {
  return Boolean(this.stack.length);
};

/**
* @this BSTIterator
* @returns {number} - the next smallest number
*/
BSTIterator.prototype.next = function() {
  let n = this.stack.pop();
  let res = n.val;
  if (n.right) {
      n = n.right;
      while (n) {
          this.stack.push(n);
          n = n.left;
      }
  }
  return res;
};

/**
* Your BSTIterator will be called like this:
* var i = new BSTIterator(root), a = [];
* while (i.hasNext()) a.push(i.next());
*/

/**
 * 迭代器实现二叉搜索树的遍历，关键在于实现一个指针始终指向当前最小节点，用栈维护遍历顺序
 */