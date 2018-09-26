/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let res = '';
  let stack = [];
  let num = '';
  for (let i = 0; i < s.length; i++) {
      if (!stack.length && /[a-z]/i.test(s[i])) {
          res += s[i];
          continue;
      }
      if (!stack.length && Number.isInteger(+s[i])) {
          num += s[i];
          continue;
      }
      if (s[i] === '[') {
          stack.push(i + 1);
          continue;
      }
      if (s[i] === ']') {
          if (stack.length === 1) {
              res += decodeString(s.slice(stack[0], i)).repeat(+num);
              num = '';
          } 
          stack.pop();
      }
  }
  return res; 
};

/**
 * 嵌套型的解码题，第一时间想到用递归解，遍历原字符串，用num记录每次递归编码串的重复次数，
 * 遇到左括号时用栈记录起始位置，遇到右括号就知道编码长度，可以递归解码了。
 */