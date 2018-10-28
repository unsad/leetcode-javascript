/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
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
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
  }
}

/**
 * 78的延伸，多了重复元素，那么只需要在回溯时跳过重复元素即可
 */
