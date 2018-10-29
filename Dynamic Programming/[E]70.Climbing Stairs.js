/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let res = [1, 1];
  for (let i = 2; i <= n; i++) {
      res[i] = res[i - 1] + res[i - 2];
  }
  return res[n];
};

/**
 * dp[i]爬到i阶的种类，dp[i] = dp[i - 1] + dp[i - 2]递推式可得
 */