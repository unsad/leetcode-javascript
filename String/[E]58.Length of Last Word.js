/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s.length) return 0;
  let right = s.length - 1;
  let res = 0;
  while (right >= 0 && s[right] === ' ') {
      right--;
  } 
  while (right >= 0 && s[right] !== ' ') {
      right--;
      res++;
  }
  return res;
};

/**
 * 简单题，求最后一个单词的长度，那么从后往前遍历即可，第一轮循环移除空格，第二轮计算长度。
 */