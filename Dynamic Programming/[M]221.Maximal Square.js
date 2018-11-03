var maximalSquare = function(matrix) {
  if (!matrix.length || !matrix[0].length) return 0;
  let m = matrix.length, n = matrix[0].length, res = 0;
  let dp = Array.from({length: m}, _ => Array.from({length: n}, _ => 0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = matrix[i][j] - 0;
      } else if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res * res;
};

/**
 * dp[i][j]表示以该点为右下角的正方形的最大边长，可得状态转移方程
 */