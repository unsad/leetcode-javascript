/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return helper(mid, nums);
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};

function helper(mid, nums) {
let right = mid;
let left = mid;
while (nums[right + 1] === nums[mid]) {
  right++;
}
while (nums[left - 1] === nums[mid]) {
  left--;
}
return [left, right];
}

/**
 * 二分找到第一个相等的数后，左右拓展
 */