/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString();
  for (let i = 0; i < Math.floor(x.length / 2); i++) {
      if (x[i] !== x[x.length - i - 1]) return false;
  }
  return true;
};

/**
 * 验证回文数字，转化为字符串求解。如果不转化的话也就是繁琐的进制转换问题，验证回文逻辑不变。
 */