/**
 * @param {number} n
 * @return {string}
 */

var convertToTitle = function (n) {
  return n === 0 ? '' : convertToTitle(Math.floor((n - 1) / 26)) + String.fromCharCode(--n % 26 + 0x41);
};

/**
 * 简单常规的进制转化类型题，递归一行解决。
 */