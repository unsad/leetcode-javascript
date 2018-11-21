/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = Math.max(...nums);
  return nums.filter(item => item !== max).find(item => item * 2 > max) ? -1 : nums.findIndex(item => item === max);
};

/**
 * 如果最大数大于其他数的两倍就找出这个数。数组内置方法解决
 */