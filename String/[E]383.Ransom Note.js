/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = magazine.split('').reduce((map, item) => map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1),new Map());
  for (let val of ransomNote) {
      map.set(val, (map.get(val) || 0) - 1);
      if (map.get(val) < 0) return false;
  }
  return true;
};

/**简单题，用map做映射记录，用set记录已映射到的值，按题意转化为代码即可 */