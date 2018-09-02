/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_VALUE;
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      res = Math.max(prices[i] - min, res);
  }
  return res;
};

/**
 * 用一个变量记录遍历过程中的最小值并与当前值求差，再用一个变量记录这个差的最大值即可
 */