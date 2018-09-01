/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let dp = Array.from({length: nums.length}, _ => Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j <= i; j++) {
          if (j + nums[j] >= i) {
              dp[i] = dp[j] + 1;
              break;
          }
      }
  }
  return dp[nums.length - 1];
};

/**
 * 55题的延伸，在算出是否能跳到末尾的基础上还要算出跳到末尾的最小次数，因为有多种方法跳到末尾，
 * 所以用动态规划dp[i]表示跳到i的最小次数。因为dp[i]肯定是递增数组，所以当dp[j](j <== i)能
 * 到达dp[i]时就能获取最小的dp[i]，可以break跳出当前循环的后续检测。
 */

