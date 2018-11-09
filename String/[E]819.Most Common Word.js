/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  let arr = paragraph.toLowerCase().replace(/['?!,;.]/g, ' ').split(/\s+/);
  let map = arr.reduce((map, item) => {
      if (!banned.includes(item)) {
          map.set(item, map.get(item) + 1 || 1);
      }
      return map;    
  },new Map());
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1])[0][0];
};

/**
 * 除杂后hashmap统计各单词出现数量，排序后输出数量最多的
 */