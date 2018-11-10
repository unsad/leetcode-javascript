/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let n = s.length;
  for (let i = Math.floor(n / 2); i > 0; i--) {
      if (n % i === 0) {
          let c = n / i;
          let str = '';
          for (let j = 0; j < c; j++) {
              str += s.slice(0, i);
          }
          if (str === s) return true;
      }
  }
  return false;
};

/**
 * 从中间截开，当能被整除时，得最小重复次数c，最大重复长度i，以前i位重复c次得字符串和原字符串比较，相等则
 * 返回结果，不相等则减小最大重复长度循环比较。
 */