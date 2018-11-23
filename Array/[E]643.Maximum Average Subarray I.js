/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = 0;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
      if (i < k) {
          cnt += nums[i];
          max = cnt / (i + 1);
      } else {
          cnt = cnt + nums[i] - nums[i - k];
          max = Math.max(cnt/k, max);
      }
  }
  return max;
};

/**
 * 求连续子数组的最大平均值，遍历计数并计算，当达到指定数量时，减去头部值再计算
 */