/**
 * @param {string} s
 * @return {number}
 */
function calculate(s) {
  s = s.replace(/\s/g, '');

  let stack = [];
  let num = 0;
  let sign = '+';

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (/\d/.test(c)) {
      num = num * 10 + +c;
    }

    if ((/\D/.test(c)) || i === s.length - 1) {
      if (sign === '-') stack.push(-num);
      if (sign === '+') stack.push(num);
      if (sign === '*') stack.push(stack.pop() * num);
      if (sign === '/') stack.push(~~(stack.pop() / num));

      sign = c;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b);
}

/**
 * 和224同样实现计算器，区别在于去掉了括号，新增了乘除，那么就有运算优先级的问题，
 * 遇到数字不能直接计算到总数，需要考虑之前的符号，如果是加减就先保存到栈中，如果是
 * 乘除就是高优先级，可以直接计算。遍历完成后，栈内只剩下加减的元素，再reduce计算即可。
 */