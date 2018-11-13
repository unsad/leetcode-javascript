/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  if (!s.length) {
    return 0;
  }
  let res = 0;
  let helper = function(i, j) {
    while (i >= 0 & j < s.length && s[i] === s[j]) {
      i--;
      j++;
      res++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  return res;
};

/**
 * 求子回文字符串。遍历每个字母，并以字母为中心向两边扩散寻找回文，每移动一步，左右相等的话结果就加1。
 * 分奇偶两种情况计算，奇数中间为i,偶数中间为i和i+1。
 */