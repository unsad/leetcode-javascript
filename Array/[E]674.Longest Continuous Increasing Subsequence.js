/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let res = 0;
  let tep = 0;
  nums.reduce((a, b) => {
      if (b > a) {
          tep++;
          res = Math.max(tep, res);
      } else {
          tep = 1;
      }
      return b;
  }, 0);
  return res;
};

/**
 * 求最长的连续子序列，每次和前一个元素判断大小即可，不递增时重新计数
 */