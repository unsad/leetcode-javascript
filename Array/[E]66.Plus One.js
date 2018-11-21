/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1;
  while (digits[i] + 1 > 9) {
    digits[i] = 0;
    i--;
  }
  if (i < 0) {
    digits.unshift(1);
  } else {
    digits[i] += 1;
  }
  return digits;
};

/**
 * 数组的形式去加1，注意处理进位即可
 */