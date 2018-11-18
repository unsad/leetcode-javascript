/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let sum = 0, n = nums.length;
      for (let a of nums) {
          sum += a;
      }
      return  n * (n + 1) / 2 - sum;
};

/**
 * 等差数列求和减去sum即可得丢失的数
 */