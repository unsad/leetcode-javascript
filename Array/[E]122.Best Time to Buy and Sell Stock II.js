/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] - prices[i - 1] > 0) {
          res += prices[i] - prices[i - 1];
      }
  }
  return res;
};

/**
 * 121的延伸，在其基础上可以买卖多次，因此只要后一天卖出比前一天买进高就可以算进利润。
 */