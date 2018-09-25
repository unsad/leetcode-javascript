/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let left = 0;
  let right = nums.length - 1;
  while (true) {
      let pos = helper(nums, left, right);
      if (pos === k - 1) {
          return nums[pos];
      } else if (pos > k - 1) {
          right = pos - 1;
      } else {
          left = pos + 1;
      }
      
  }
};

function helper (nums, left, right) {
  let pivot = nums[left];
  let l = left + 1;
  let r = right;
  
  while (l <= r) {
      if (nums[l] < pivot && nums[r] > pivot) {
          swap(nums, l++, r--);
      }
      if (nums[l] >= pivot) l++;
      if (nums[r] <= pivot) r--;
  }
  swap(nums, left, r);
  return r;
}

function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

/**
 * 找到数组中第k大的数，最简单的直接用内置方法排序取k-1索引就好了。但显然这题目的
 * 还是要手动实现排序，这里用了快速排序。选取一个中枢点，遍历数组，比其大的放左边，小的放右边。
 * 完成后检查中枢点索引，如果大于k-1，说明目标点在左边，继续对左边元素做快排，反之对右边元素快排。
 * 当中枢点索引正好等于k-1时得到结果。
 */