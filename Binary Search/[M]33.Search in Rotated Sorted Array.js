/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < nums[right]) {
          if (nums[mid] < target && nums[right] >= target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      } else {
          if (nums[left] <= target && nums[mid] > target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
  }
  return -1;
};

/**
 * 这题用二分的关键在于找到正确的左右边界，如果中间数小于右边界，则右半段有序，反之左半段有序。
 * 在有序半段里判断目标是否在其中来决定保留哪半边。
 */