/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = nums[0];
  let f = Array.from({length: nums.length}, _ => 0);
  let g = Array.from(f);
  f[0] = nums[0];
  g[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    f[i] = Math.max(f[i - 1] * nums[i], g[i - 1] * nums[i], nums[i]);
    g[i] = Math.min(f[i - 1] * nums[i], g[i - 1] * nums[i], nums[i]);
    res = Math.max(res, f[i]);
  }
  return res;
};

/**
 * 这题求最大乘积子数组，由于有负数的存在，最大乘积可能由负数乘以负数，分两种情况讨论。这里用
 * 动态规划数组f[i]和g[i]分别表示以i为结尾的最大子数组和最小子数组，那么可能两个状态转移方程，
 * 最大子数组就是f中最大的元素。
 */