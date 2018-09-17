/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length < t.length) return '';
  let shash = new Map();
  let thash = new Map();
  let res = Number.MAX_SAFE_INTEGER;
  let minStr = '';

  for (let i = 0; i < t.length; i++) {
     thash.set(t[i], (thash.get(t[i]) || 0) + 1);
  }

  let right = 0;

  for (let left = 0; left < s.length; left++) {
    while (right < s.length && !isValid(shash, thash)) {
      shash.set(s[right], (shash.get(s[right]) || 0) + 1);
      if (right < s.length) {
        right++;
      } else {
        break;
      }
    }
    if (isValid(shash, thash)) {
      if (res > right - left){
        res = right - left;
        minStr = s.slice(left, right);
      }
    }
    shash.set(s[left], shash.get(s[left]) - 1);
  }
  return minStr;
};

function isValid(shash, thash) {
for (let key of thash.keys()) {
  if (thash.get(key) > (shash.get(key) || 0)) {
    return false;
  }
}
return true;
}

/**
 * 求s中包含t的最小子字符串，一般遇到这种极值子字符串题，应该有两种思路，动态规划和滑动窗口，这题
 * 不太好找合适的动态规划数组，用滑动窗口动态计算。建立两个hashmap,shash保存当前窗口的字母和数量映射关系，
 * thash保存目标包含字符串的字母数量映射关系，遍历每个left起点并将right向右移，isValid判断当前窗口是否
 * 包含目标子字符串，包含的话则对结果进行一次最小值比较。注意每次更改left起点也要同时更新shash。遍历完成则
 * 可得最小值。
 */