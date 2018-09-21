/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let res = 0;
  for (let i = 1; i < s.length; i++) {
      let total = 0;
      for (let j = i; j >= 0; j--) {
          if (s[j] === ')') {
              total++;
          } else {
              total--;
          }
          if (!total) res = Math.max(res, i - j + 1);
          if (total < 0) break;
      }
  }
  return res;
};

/**
 * 比较容易想到的做法是两层遍历，在以i为结尾的子串中寻找极值。
 */

 /**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [];
  let start = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(i);
      } else if (s[i] === ')') {
          if (!stack.length) {
              start = i + 1;
          } else {
              stack.pop();
              res = stack.length ? Math.max(res, i - stack[stack.length - 1]) : Math.max(res, i - start + 1);
          }
      }
  }
  return res;
};

/**
 * 还有一种用栈辅助的方法，也是括号题常用的手段。用一个变量start记录有效子串的起始位置。
 * 当遇到)且栈不为空时就有一个有效子串存在了，同时更新res。
 */