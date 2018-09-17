/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      if (!stack.includes(s[i])) {
          stack.push(s[i])
      } else {
          while (stack[0] !== s[i]) {
              stack.shift();
          }
          stack.push(s[i]);
          stack.shift();
      }
      res = Math.max(res, stack.length);
  }
  return res;
};

/**
 * 求最长非重复子字符串，用栈保存非重复字符，当遇到重复字符时将其前面的字符全部推出，
 * 遍历求得最长栈即可。
 */