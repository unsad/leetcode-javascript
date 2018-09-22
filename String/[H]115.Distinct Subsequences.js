/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
  let dp = Array.from({length: t.length + 1}, (_, idx) => {
    if (idx === 0) {
      return Array.from({length: s.length + 1}, _ => 1);
    } else {
      return Array.from({length: s.length + 1}, _ => 0);
    }
  });
  for (let i = 1; i <= t.length; i++) {
    for (let j = 1; j <= s.length; j++) {
      dp[i][j] = dp[i][j - 1] + (t[i - 1] === s[j - 1] ? dp[i - 1][j - 1] : 0);
    }
  }
  return dp[t.length][s.length];
};

/**
 * 找出给定目标子串的构造数量，动态规划解决，动规数组dp[i][j]表示目标字符串的前i位子串被原字符串的
 * 前j位子串构造出的数量。由状态转移方程求得最终状态得解。
 */