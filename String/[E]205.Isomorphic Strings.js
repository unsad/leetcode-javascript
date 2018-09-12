/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
      if (!map.has(s[i]) && !set.has(t[i])) {
          map.set(s[i], t[i]);
          set.add(t[i]);
      } 
      if (!map.has(s[i]) && set.has(t[i])) return false;
      if (map.get(s[i]) !== t[i]) {
         return false;       
      }
  }
  return true;
};

/**
 * 用map做映射记录，用set记录映射过的值，按题意转化为代码即可
 */