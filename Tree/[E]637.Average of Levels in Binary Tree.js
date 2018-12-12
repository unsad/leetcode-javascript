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
var averageOfLevels = function(root) {
  let res = [];
  let quene = [];
  quene.push(root);
  while(quene.length > 0) {
      let sum = 0;
      let count = 0;
      let temp = [];
      while(quene.length > 0) {
          let n = quene.shift();
          sum += n.val;
          count++;
          if (n.left !== null) {
              temp.push(n.left);
          }
          if (n.right !== null) {
              temp.push(n.right);
          }
      }
      quene = temp;
      res.push(sum/count);
  }
  return res;
};

/**
 * 求每层平均数，层序遍历解决
 */