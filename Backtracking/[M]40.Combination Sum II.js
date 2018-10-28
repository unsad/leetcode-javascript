/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
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
      helper(res, out, candidates, target - candidates[i], i + 1);
      out.pop();
      while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
        i++;
      }
    }
  }
}

/**
 * 39的延伸，增加了重复值，在回溯时注意跳过
 */