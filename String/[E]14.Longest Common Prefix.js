/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  let res = '';
  for (let i = 0; i < strs[0].length; i++) {
    let s = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== s) {
        return res;
      }
    }
      res += s;
      console.log(res)
  }
  return res;
};

/**
 * 简单题，按照题意转化为代码即可，取第一个元素遍历检测并拓展common，当超过第一个元素长度或者有不相等时，
 * 返回当前common
 */