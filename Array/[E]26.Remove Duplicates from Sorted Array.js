/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let cur = 0;
  let pre = 0;
  while (cur < nums.length) {
    if (nums[cur] === nums[pre]) {
        cur++;
    } else {
        nums[++pre] = nums[cur++];
    }
  }
  return pre + 1;
};

/**
 * 两个指针，一个用来向前遍历，一个用来记录已替换非重复元素的位置
 */