/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let arr = nums.sort((a, b) => a - b);
  let end = arr.length - 1;
  return Math.max(arr[0] * arr[1] * arr[2], arr[0] * arr[1] * arr[end], arr[0] * arr[end - 1] * arr[end - 2], arr[end] * arr[end - 1] * arr[end - 2])
};


/**
 * 求其中三个元素的最大乘积，需要考虑正负，那么排序后取头尾元素分情况讨论
 */