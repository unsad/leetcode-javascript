/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  return nums.reduce((a, b, index) => {return index % 2 === 0 ? a + b : a}, 0)
};

/**
 * 要最大化每两个值中最小值之和，应该让两个值尽可能相近，排序取奇数位即可
 */