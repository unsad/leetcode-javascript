/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let strArr = str.split(' ');
  if (pattern.length !== strArr.length) return false;
  let map = new Map();
  let set = new Set();
  for (let i = 0; i < pattern.length; i++) {
      if (!map.has(pattern[i]) && !set.has(strArr[i])) {
          map.set(pattern[i], strArr[i]);
          set.add(strArr[i]);
          continue;
      }
      if (!map.has(pattern[i]) && set.has(strArr[i])) return false;
      if (map.get(pattern[i]) !== strArr[i]) return false;
  }
  return true;
};

/**
 * 和205思路完全一样，map记录映射，set记录映射过的值。
 */