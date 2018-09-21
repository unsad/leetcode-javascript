/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  let res = [];
  for (let i = 0; i < input.length; i++) {
      if (input[i] === '+' || input[i] === '-' || input[i] === '*') {
          let left = diffWaysToCompute(input.slice(0, i));
          let right = diffWaysToCompute(input.slice(i + 1));
          for (let j = 0; j < left.length; j++) {
              for (let k = 0; k < right.length; k++) {
                  if (input[i] === '+') res.push(left[j] + right[k]);
                  if (input[i] === '-') res.push(left[j] - right[k]);
                  if (input[i] === '*') res.push(left[j] * right[k]);
              }
          }
      }
  }
  if (!res.length) res.push(+input);
  return res;
};

/**
 * 不同的插入括号的形式计算结果，以运算符为单位分治解决
 */