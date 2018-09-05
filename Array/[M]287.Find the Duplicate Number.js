/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      let middle = left + Math.floor(right - left);
      let cnt = 0;
      for (let num of nums) {
          if (num <= middle) {
              cnt++;
          }
      }
      if (cnt <= middle) {
          left = middle + 1;
      } else {
          right = middle - 1;
      }
  }
  return left;
};

/**
 * 这题限制了常数空间复杂度以及不能修改数组，常规查重方法就都不能用了。但时间复杂度要求不高，
 * 就可以考虑用二分搜索了。每一次搜索中统计位于middle一边的num数量，重复数肯定在更大的一边。
 * 时间复杂度为O(nlogn)
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0, fast = 0, finder = 0;
  while (true) {
      slow = nums[slow];
      fast = nums[nums[fast]];
      if (slow === fast) break;
  }
  while (true) {
      slow = nums[slow];
      finder = nums[finder];
      if (slow === finder) break;
  }
  return finder;
};

/**
 * 在网上还看到一种更骚的解法，用到了快慢指针，因为有重复数，和数值1到n的限制，通过idx到数值的映射是一定
 * 可以组成一个p型环的，并且idx为0的位置不在环内，环的入口就是重复值。那么可以先通过快慢指针多次映射找到
 * 位于环内的某个idx相遇，这个idx有个特点，就是再走慢指针走到入口的步数也会回到入口,这样可以再建立一个查
 * 找器从0找起，相遇的位置就是环入口，也就是结果了。
 */