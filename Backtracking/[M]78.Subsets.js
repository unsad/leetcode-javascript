/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let out = [];
  let res = [];
  nums.sort((a, b) => a - b);
  helper(nums, 0, res, out);
  return res;
};

function helper(nums, pos, res, out) {
  res.push(Array.from(out));
  for (let i = pos; i < nums.length; i++) {
    out.push(nums[i]);
    helper(nums, i + 1, res, out);
    out.pop();
  }
}

/**基础回溯，求数组元素的所有组合 */

