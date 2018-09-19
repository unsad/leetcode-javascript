/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (!s.length) return 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
      map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let item of map) {
      if (item[1] < k) {
          let sArr = s.split(item[0]);
          return Math.max(...sArr.map(item => longestSubstring(item, k)));
      }
  }
  return s.length;
};

/**
 * 分治法，用hashmap统计各字符出现次数，不达标的字符肯定不在子字符串中，则可以以这些字符为间隔
 * 拆分原字符串递归求解。
 */
