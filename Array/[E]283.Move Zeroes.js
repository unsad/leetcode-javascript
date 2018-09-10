/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let point = 0;
   for (let i = 0; i < nums.length; i++) {
      if (nums[i]) {
          swap(nums, i, point++);
      }
  }
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * 简单的排序题，用个指针记录非零位置遍历交换即可。
 */