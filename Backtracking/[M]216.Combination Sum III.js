/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [];
  let out = [];
  helper(k, n, 1, out, res);
  return res;
};

function helper(k, n, level, out, res) {
  if (n < 0) return;
  if (n === 0 && out.length === k){
    res.push(Array.from(out))
  }
  for (let i = level; i <= 9; i++) {
    out.push(i);
    helper(k, n - i, i + 1, out, res);
    out.pop();
  }
}

/**
 * 数字给定1到9，限定了个数，同样是基础回溯解，获得解的条件增加一个长度判断即可
 */
