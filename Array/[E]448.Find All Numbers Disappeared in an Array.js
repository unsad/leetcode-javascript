/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      let idx = Math.abs(nums[i]) - 1;
      nums[idx] = (nums[idx] > 0) ? -nums[idx] : nums[idx];
  }
  for (let i = 0; i < nums.length; ++i) {
      if (nums[i] > 0) {
          res.push(i + 1);
      }
  }
  return res;
};

/**
 * 看到数组元素限制1到n的题并且对时间空间复杂度有要求的，要立刻想到三种经典思路
 * 1.正负标记
 * 2.置换到对应下标标记
 * 3.对应下标位置元素累加长度标记
 * 这里选择1解决
 */
