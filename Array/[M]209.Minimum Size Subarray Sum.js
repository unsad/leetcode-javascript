/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let res = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];  
    while (sum >= s && left <= i) {
      res = Math.min(i - left + 1, res);
      sum -= nums[left++];
    }
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};

/**
 * 类似于53题，由最大连续总和变为大于s的最短连续总和，思路比较简单，
 * 维护一个数组头指针，当达到条件时计算最小长度并将头指针向右移，遍历完成
 * 得结果
 */