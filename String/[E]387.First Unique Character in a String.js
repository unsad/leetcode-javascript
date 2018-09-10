/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
  let map = s.split('').reduce((map, item) => map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1), new Map());
  for (let i = 0;  i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  return -1;
};

/**
 * 简单题，map记录元素出现次数，找到第一个出现次数等于1的元素位置即可。
 */