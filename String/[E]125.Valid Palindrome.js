/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().split('').filter(item => /[a-z0-9]/i.test(item));
  return s.join('') === s.reverse().join('')
};

/**
 * 验证回文串，直接偷懒用js内置方法加正则解了。常规思路应该是头尾指针遍历并过滤非法字符。
 */