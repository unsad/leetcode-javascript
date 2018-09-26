/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let res = 0;
  let sign = 1;
  let n = s.length;
  let stack = [];
  for (let i = 0; i < n; i++) {
      let c = s[i];
      if (c >= 0) {
          let num = '';
          while (i < n && s[i] >= 0) {
              num += s[i++];
          }

          res += sign * num;
          i--;
      } else if (c === '+') {
          sign = 1;
      } else if (c === '-') {
          sign = -1;
      } else if (c === '(') {
          stack.push(res);
          stack.push(sign);
          res = 0;
          sign = 1;
      } else if (c === ')') {
          res *= stack.pop();
          res += stack.pop();
      }

  }
  return res;
};

/**
 * 实现计算器，写过计算器相关业务的同学应该能第一时间想到栈，这题比较简单，
 * 只需要实现加减法和括号，就没有优先级问题，遍历遇到数字可以立刻加到总数中，
 * 遇到左括号就可以用栈先保存当前总数和当前运算的符号，再对括号内的数字进行
 * 总数计算，遇到右括号就可以根据栈中符号和总数得到新的总数。
 */