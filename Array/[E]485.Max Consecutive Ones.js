/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  return Math.max(...nums.join("").split('0').map(item => item.length))
};

/**
 * 以0分割比较长度即可，内置方法解决
 */