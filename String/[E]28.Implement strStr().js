/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let exp = new RegExp(needle);
  return haystack.search(exp);
};

/**
 * 简单题，两层遍历搞定，或者直接用正则。
 */