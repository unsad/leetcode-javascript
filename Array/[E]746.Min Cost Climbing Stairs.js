/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i < cost.length + 1; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
  }
  return dp[cost.length];
};

/**
 * 动态规划，dp[i]表示到i位置的最小花费，由递推式得结果
 */