 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

/**
 * 找出合适的插入位置，基础二分
 */