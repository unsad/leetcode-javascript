/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < strs.length; i++) {
      let temp = strs[i];
      let key = strs[i].split('').sort().join('');
      if (map.has(key)) {
          let value = map.get(key);
          value.push(temp);
          map.set(key, value);
      } else {
          map.set(key, [temp]);
      }
  }
  for (let item of map.values()) {
      res.push(item);
  }
  return res;
};

/**
 * 相同字母组成的分类题，本质还是映射问题，用排序后的单词作为key遍历分组记录到value即可。
 */