/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

var removeKdigits = function(num, k) {
  let stack = [], numDigits = num.length;
  for (let i = 0; i < numDigits; i++) {
    while(k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
        stack.pop();
        k--;
    }
    stack.push(num[i]);
  }
  stack = k > 0 ? stack.slice(0, -k) : stack;
  return stack.join('').replace(/^0+/, '') || '0';
};

/**
 * 移除k个字符让给定数字尽可能小，则需要保证前面的位数尽可能小，递减栈解决。如果遍历完成已经是最佳
 * 排序，还有k次没有使用，则移除栈尾的k个数字。
 */