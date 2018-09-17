/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let res = [];
  if (!s.length || !words.length) return res;
  let m = words[0].length;
  let n = words.length;
  let m1 = words.reduce((map, item) => map.set(item, (map.get(item) || 0) + 1), new Map());
  for (let i = 0; i <= s.length - m * n; i++) {
      let map = new Map();
      let j;
      for (j = 0; j < n; j++) {
          let t = s.substr(i + j * m, m);
          if (!m1.has(t)) break;
          if ((map.get(t) || 0) < m1.get(t)) {
              map.set(t, (map.get(t) || 0) + 1);
          } else {
              break;
          }
      }
      if (j === n) {
          res.push(i);
      }
  }
  return res;
};

/**
 * 为words建立单词和数量间的映射，再遍历字符串以每个字符串为起点切割words单个单词长度的字符串，
 * 并建立个hashmap记录，和words的hashmap按题意比对，满足题意则记录当前遍历的起点位置，遍历完成得到结果。
 */