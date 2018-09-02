/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;
  let n = prices.length;
  let dp1 = Array.from({length: n}, _ => 0);
  let dp2 = Array.from(dp1);
  for (let i = 1, min = prices[0]; i < n; i++) {
      min = Math.min(min, prices[i]);
      dp1[i] = Math.max(dp1[i - 1], prices[i] - min);
  }
  for (let i = n - 2, max = prices[n - 1]; i >= 0; i--) {
      max = Math.max(max, prices[i]);
      dp2[i] = Math.max(dp2[i], max - prices[i]);
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
      res = Math.max(res, dp1[i] + dp2[i]);
  }
  return res;
};

/**
 * 121题基础上又一变种，多增加了一次交易次数且同时只能持有一股。
 * 既然如此把这题拆解成两个121题即可，遍历取交易拆分点，用两个动态规划数组分别
 * 保存拆分后每次交易的最大值，最后相加取max即可。
 */