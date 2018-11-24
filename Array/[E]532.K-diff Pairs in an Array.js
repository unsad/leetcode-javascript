/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let res = 0;
  let j = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      j = Math.max(j, i + 1);
      if (j >= nums.length || nums[i] === nums[i - 1]) continue;
      while(nums[j] - nums[i] < k) {
          j++;
      }
      if (nums[j] - nums[i] === k) {
          res++;
      }
  }
  return res;
};

/**
 * 先排序，再用双指针，第一个指针i记录当前元素，第二个指针往前移并将所指元素和当前元素求差，小于k则继续
 * 前移，等于k则结果加1。
 */