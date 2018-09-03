/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let res = 0;
  let n = height.length;
  for (let i = 0, j = n - 1; i <= j; height[i] < height[j] ? i++ : j--) {
    res = Math.max(res, Math.min(height[i], height[j]) * (j - i));
  }
  return res;
};

/**
 * 这道题拿到手应该立刻能想到两层循环暴力解决，但应该有更好的遍历方案。因为装水量取决于最短的板，
 * 所以可以定义两个指针从左右两端向中间移动，移动端取决于更短的板。
 */