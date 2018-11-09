/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverse(s) {
  return s.split("").reverse().join("")
}
function helper(s) {
  return reverse(s.slice(0, s.length/2)) + s.slice(s.length / 2);
}
var reverseStr = function(s, k) {
  if (s.length < k) {
      return reverse(s);
  }
  if (s.length < 2 * k) {
      return reverse(s.slice(0, k)) + s.slice(k);
  }
  return helper(s.slice(0, 2 * k)) + reverseStr(s.slice(2 * k), k);
};

/**
 * 翻转字符串的核心实现不变，按题意分类讨论分割范围翻转即可
 */