/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
  if (!nums.length) return 0;
  let posi = 1, nega = 1;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 0) {
          posi = nega + 1;
      } 
      if (nums[i] - nums[i - 1] < 0) {
          nega = posi + 1;
      }
  }
  return Math.max(posi, nega);
};

/**
 * 找到最长的摇摆子序列，分两种情况，以正数或负数结尾，最容易想到的思路是动态规划，f[i]
 * 和g[i]表示以i结尾并且是正数，负数的最长子数组，可以得到状态转移方程并取两个数组中的最大值求解。
 * 但实际上没必要保存每个位置的最长子数组，因为越往后长度肯定是越来越大的，那么只需要用两个变量保存
 * 当前遍历的位置i的最大长度即可，遍历完成即可取得结果。
 */