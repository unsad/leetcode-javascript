/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let flag = false;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] < 0) {
      if (!flag) {
          if (i == 1 || nums[i] >= nums[i - 2]) {
                    nums[i - 1] = nums[i];
                } else {
                nums[i] = nums[i - 1];
                }
              flag = true;
      } else {
        return false;
      }
    }
  }
  return true;
};

/**
 * 允许修改一次的非增数组检测，那么用一个标志位标记并遍历检测，遇到不符合的位置时
 * 修改相应位置的值使条件成立并让当前位置的值尽可能小
 */