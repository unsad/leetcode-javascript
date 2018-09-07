/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = Number.MIN_SAFE_INTEGER;
  let curSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
      curSum = Math.max(nums[i], nums[i] + curSum);
      res = Math.max(res, curSum);
  }
  return res;
};

/**
 * 简单题，思路也很简单，可以看做是动态规划,dp[i]表示以i为结尾的总和最大子数组，
 * 那么dp[i + 1] = max(dp[i], dp[i] + nums[i])，节省空间用变量保存dp[i]即可
 */