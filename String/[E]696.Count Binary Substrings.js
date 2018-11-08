/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  let prevRunLength = 0, curRunLength = 1, res = 0;
  for (let i=1;i<s.length;i++) {
    if (s[i] == s[i - 1]) curRunLength++;
    else {
        prevRunLength = curRunLength;
        curRunLength = 1;
    }
    if (prevRunLength >= curRunLength) res++;
  }
  return res;
}

/**
 * 这题的关键在于分两个变量记录0和1出现的连续次数，当其中一个数字连续出现n次后，
 * 另一个数字连续出现m次，结果就可以加m。当不连续时，就要重置统计。
 */
