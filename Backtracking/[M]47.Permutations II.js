/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  helper(nums, 0, res);
  return res;
};

function helper(nums, start, res) {
  if (start === nums.length - 1) {
    res.push(Array.from(nums));
    return;
  }
  let set = new Set();
  for (let i = start; i < nums.length; i++) {
    if (set.has(nums[i])) continue;
    swap(nums, start, i);
    set.add(nums[start]);
    helper(nums, start + 1, res);
    swap(nums, start, i);
  }
}

function swap(nums, start, i) {
  let temp = nums[start];
  nums[start] = nums[i];
  nums[i] = temp;
}

/**
 * 有重复值的全排列，用set记录一次调用中已交换过的值，跳过重复即可
 */
