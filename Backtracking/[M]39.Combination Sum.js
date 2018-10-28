/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];
  let out = [];
  candidates.sort((a, b) => a - b);
  helper(res, out, candidates, target, 0);
  return res;
};

function helper(res, out, candidates, target, start) {
  if (target < 0) return;
  if (target === 0) {
    res.push(Array.from(out));
  } else {
    for (let i = start; i < candidates.length; i++) {
      out.push(candidates[i]);
      helper(res, out, candidates, target - candidates[i], i);
      out.pop();
    }
  }
}

/**
 * 基础回溯，每次推入一个值时目标数减去该值，当目标值为0则获得一个解，小于0就跳出
 */