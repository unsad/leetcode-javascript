/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
          triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
      }
  }
  return triangle[0][0];
};

/**
 * dp[i][j]表示i层第i个元素到底端最短路径，由递推式 dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1])
 * 得到顶层值即为结果
 */