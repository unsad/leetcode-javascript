/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
          stack.push(s[i]);
      } else {
          if (!stack.length) return false;
          if (s[i] === ')' && stack[stack.length - 1] !== '(') return false;
          if (s[i] === ']' && stack[stack.length - 1] !== '[') return false;
          if (s[i] === '}' && stack[stack.length - 1] !== '{') return false;
          stack.pop();
      }    
  }
  return !stack.length;
};

/**
 * 判断是否为有效括号，括号题首先考虑用栈解，这题常规思路，按题意遍历检查即可
 */