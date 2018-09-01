/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max || max >= nums.length - 1) break;
    max = Math.max(i + nums[i], max);
  }
  return max >= nums.length - 1;
};

/**
 * 贪心算法解决，遍历过程中维护一个当前能达到的最远距离max，
 * 终止条件为max到达终点或者未到达终点时遍历到max。
 */