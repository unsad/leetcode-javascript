/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  helper(n, n, '', res);
  return res;
};

function helper(left, right, out, res) {
  if (left > right) return;
  if (!left && !right) {
      res.push(out);
  } else {
      if (left > 0) helper(left - 1, right, out + '(', res);
      if (right > 0) helper(left, right - 1, out + ')', res);
  }
}

/**
 * 记录所有能生成的括号组合，dfs解决，靠记录剩余括号数量决定跳出时机。
 */