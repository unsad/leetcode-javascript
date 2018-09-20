/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = [];
  dfs(s, 0, [], res);
  return res;
};

function dfs(s, start, out, res) {
  if (start === s.length) {
      res.push(Array.from(out));
      return;
  }
  for (let i = start; i < s.length; i++) {
      if (isValid(s, start, i)) {
          out.push(s.slice(start, i + 1));
          dfs(s, i + 1, out, res);
          out.pop();
      }
  }
}
function isValid(s, start, end) {
  while (start < end) {
      if (s[start++] !== s[end--]) return false;
  }
  return true;
}

/**
 * 拆分为回文字符串数组，由于要求所有情况，免不了所有情况都要遍历到，用深度遍历实现，需要用一个参数记录每次开始遍历的位置。
 * 当该参数记录到末尾时，则可输出这次的结果。
 */