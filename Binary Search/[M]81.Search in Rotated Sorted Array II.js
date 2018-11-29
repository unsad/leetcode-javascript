/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
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
      if (nums[mid] === target) return true;
      if (nums[mid] < nums[right]) {
          if (nums[mid] < target && nums[right] >= target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      } else if (nums[mid] > nums[right]) {
          if (nums[left] <= target && nums[mid] > target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          right--;
      }
  }
  return false;
};

/**
 * 33的延伸，之前由于没有重复值和最右边比较大小可以确认半边，这次有重复值。解决方法也简单，
 * 最右向左移，将重复值舍弃即可
 */