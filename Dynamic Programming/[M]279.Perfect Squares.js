/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let dp = Array.from({length: n + 1}, _ => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
      for (let j = 1; i + j * j <= n; j++) {
          dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
      }
  }
  return dp[n];
};

/**
 * dp[i]表示i的完全平方数，两层循环对n以下的所有值动态更新完全平方数，循环完毕得解
 */