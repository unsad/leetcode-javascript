/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let total = 0;
  for (let [index, val] of nums.entries()) {
      if (sum - val === 2 * total) return index;
      total += val;
  }
  return -1;
};

/**
 * 先求总和，再遍历依次累加，用总和减去每个元素和当前累加值比较
 */