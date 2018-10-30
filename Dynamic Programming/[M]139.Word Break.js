/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = Array.from({length: s.length + 1}, _ => false);
  dp[0] = true;
  for (let i = 0; i < s.length + 1; i++) {
      for (let j = 0; j < i; j++) {
          if (dp[j] && wordDict.includes(s.slice(j, i))) {
              dp[i] = true;
              break;
          }
      }
  }
  console.log(dp)
  return dp[s.length];
};

/**
 * 目标字符串能否被数组中元素组合而成，dp[i]表示字符串到i位置之前能被组合，两层循环求解dp[i]，
 * 找到就跳出。
 */