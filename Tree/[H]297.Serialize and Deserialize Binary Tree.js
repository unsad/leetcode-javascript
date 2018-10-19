/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let string = '';

  (function buildString(node) {
      if (!node) {
          string += 'e ';
      } else {
          string += node.val + ' ';
          buildString(node.left);
          buildString(node.right);
      }
  })(root);

  return string;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  let nodes = data.split(' ');

  return (function buildTree() {
      let val = nodes.shift();

      if (val === 'e') {
          return null;
      } else {
          let node = new TreeNode(Number(val));
          node.left = buildTree();
          node.right = buildTree();
          return node;
      }
  })();
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/

/**
 * 二叉树的序列与反序列化，那么按一种遍历方式转化为一种可反转回来的表示方法即可。
 * 这里选择字符串形式记录的先序遍历。
 */