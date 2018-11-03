var rob = function(nums) {
  if (nums.length <= 1) {
      return nums[0] || 0;
  }
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  for (let i = 2; i < nums.length; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[dp.length - 1]
};

/**
 * 不能相邻的最大值，可得状态转移方程dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
 */