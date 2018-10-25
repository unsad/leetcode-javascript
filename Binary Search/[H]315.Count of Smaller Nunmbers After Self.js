/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  let res = [];
  let newArr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let left = 0;
    let right = res.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (res[mid] < nums[i]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    newArr.unshift(left);
    res.splice(left, 0, nums[i]);
  }
  return newArr;
};

/**
 * 从右往左插入排序到一个新有序数组，每次计算其index即为原数组后面小于当前元素的
 * 数量，插入排序用二分实现
 */