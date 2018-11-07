/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let a = word[0];
  let b = word.slice(1);
  if (/[A-Z]/.test(a)) {
      return !/[A-Z]/.test(b) || !/[a-z]/.test(b)
  } else {
      return !/[A-Z]/.test(b)
  }
};

/**
 * 检测大写字母是否符合规范，那么考虑正则，按逻辑翻译即可
 */