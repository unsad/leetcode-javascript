/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (t1 !== null || t2 !== null) {
      let tmp = new TreeNode(0);
      if(null !== t1) tmp.val += t1.val;
      if(null !== t2) tmp.val += t2.val;
      tmp.left = mergeTrees((t1 !== null) ? t1.left : null, (t2 !== null) ? t2.left : null);
      tmp.right = mergeTrees((t1 !== null) ? t1.right : null, (t2 !== null) ? t2.right : null);
      return tmp;
  } else return null;
};

/**
 * 合并两棵树的值，前序遍历处理值，子节点递归处理
 */