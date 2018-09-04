/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let res = 0;
  let m = {};
  for (let num of nums) {
      if (!m[num]) {
          let left = m[num - 1] || 0;
          let right = m[num + 1] || 0;
          let sum = left + right + 1;
          m[num] = sum;
          res = Math.max(res, sum);
          m[num - left] = sum;
          m[num + right] = sum;
      }
  }
  return res;
};

/**
 * 求最长的连续子序列。同样是线性复杂度内的问题，先考虑开辟额外空间。这里用hashmap记录每个元素和
 * 其连续长度，在遍历过程中动态更新并取最大值res。遍历完成后返回res即可。
 */