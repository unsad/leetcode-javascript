/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let dp = Array.from({length: s.length}, _ => []);
  let len = 0, left = 0, right = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[j][i] = s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1]);
      if (dp[j][i] && len < i - j + 1) {
        len = i - j + 1;
        left = j;
        right = i;
      }
    }
    dp[i][i] = 1;
  }
  return s.slice(left, right + 1);
};

/**
 * 求最长回文字符串，极值问题多考虑贪心和动态规划，这题显然不适合贪心。新建动规二维数组为dp[i][j]
 * 表示i到j的子字符串为回文，按状态转移方程求解。
 */