/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let map = s.split('').reduce((map, item) => map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1),new Map());
  for (let i = 0; i < t.length; i++) {
     if (map.get(t[i]) >= 1) {
         map.set(t[i], map.get(t[i]) - 1);
     } else return false;
  }
  return true;
};

/**
 * 和383类似，用map记录即可
 */