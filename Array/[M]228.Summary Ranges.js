/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) return [];
  let res = [`${nums[0]}`];
  let start = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] === 1) {
          res[res.length - 1] = `${start}->${nums[i]}`;
      } else {
          start = nums[i];
          res.push(`${nums[i]}`);      
      }
  }
  return res;   
};

/**
 * 这一题顺着题目思路转化为代码即可，分两种情况对数组末尾处理。
 */