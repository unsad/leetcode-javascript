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
 * 比较容易想到的办法是用动态规划dp[i]表示跳到i的最小次数。因为dp[i]肯定是递增数组，所以当
 * dp[j](j <== i)能到达dp[i]时就能获取最小的dp[i]，可以break跳出当前循环的后续检测。
 */

var jump = function(nums) {
  let res = 0;
  let last = 0;
  let cur = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    cur = Math.max(cur, i + nums[i]);
    if (i === last) {
      last = cur;
      res++;
      if (cur >= nums.length - 1) break;
    }
  }
  return res;
};

/**
 * 还有一种网上大神的解法是用两个指针动态更新当前跳能达到的最远位置cur和当前跳之后能达到的最远位置last,
 * 这种方法有点像贪心，不过考虑了更深的一层。
 */


