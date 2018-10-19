/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = Array.from({length: n + 1}, _ => 0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
      for (let j = 0; j < i; j++) {
          dp[i] += dp[j] * dp[i - j - 1];
      }
  }
  return dp[n];
};

/**
 * 求给定节点数的二叉搜索树种类用整体法考虑，每多一个节点增加一层为根节点，左右都是新的二叉搜索树。
 * 根节点可以为节点值不大于i的n种情况，对根节点为j + 1时，左边搜索树数量为dp[j]，右边则为dp[i - j - 1]。
 */