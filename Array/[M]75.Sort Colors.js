/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let red = 0;
  let blue = nums.length - 1;
  for (let i = 0; i <= blue; i++) {
      if (nums[i] === 0) {
          swap(nums, i, red++);
      }
      if (nums[i] === 2) {
          swap(nums, i--, blue--);
      }
  }
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 * 排序题，遍历一次将对应颜色元素交换到特定区域即可，红色到头部，蓝色到尾部，白色保持中间不变，分别用指针记录。
 */