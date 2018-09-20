/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let res = [];
  let map = words.reduce((map, item, index) => map.set(item, index), new Map());
  let set = new Set(Array.from(words,item => item.length));
  for (let i = 0; i < words.length; i++) {
      let t = words[i].split('').reverse().join('');
      let len = t.length;
      if (map.has(t) && map.get(t) !== i) {
          res.push([i, map.get(t)]);
      }
      for (let d of set) {
          if (d < len && check(t.slice(0, len - d)) && map.has(t.slice(len - d))) {
              res.push([i, map.get(t.slice(len - d))]);
          }
          if (d < len && check(t.slice(d - len)) && map.has(t.slice(0, d))) {
              res.push([map.get(t.slice(0, d)), i]);
          }
      }  
  }
  return res;
};

function check(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
      if (s[left++] !== s[right--]) {
          return false;
      }
  }
  return true;
}

/**
 * 用个map记录单词和其位置的映射，再用个set记录所有长度。遍历单词，分两种情况。
 * 1.两个单词长度一样：如果单词反序后在map中存在且位置和当前单词不同，则可得结果。
 * 2.两个单词长度不一：遍历所有长度，选出长度小于当前单词的，进行下一步比较。
 * 截取当前单词为两部分，如果需要满足条件，前部分必须为回文，并且后部分反序等于当前选出单词。
 */