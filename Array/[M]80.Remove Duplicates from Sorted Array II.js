/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let pre = 0;
  let cur = 1;
  let count = 1;
  while (cur < nums.length) {
    if (nums[pre] === nums[cur] && count === 0) {
      cur++;
    } else {
      if (nums[pre] === nums[cur]) {
        count--;
      } else {
        count = 1;
      }
      nums[++pre] = nums[cur++];
    }
  }
  return pre + 1;
};

/**
 * 这题是27题的变种，相比其有了重复数量的条件放宽，于是在前者两个指针的基础上，还要增加一个变量计数重复数量。无非是多加一个判断条件，主要思路还是相同的。
 */