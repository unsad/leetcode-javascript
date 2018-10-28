/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  let out = [];
  helper(res, out, 1, k, n);
  return res;
};

function helper(res, out, pos, k, n) {
  if (out.length === k) {
    res.push(Array.from(out));
    return;
  }
  for (let i = pos; i <= n; i++) {
    out.push(i);
    helper(res, out, i + 1, k, n);
    out.pop();
  }
}

/**
 * 基础回溯，设置好跳出条件即可
 */