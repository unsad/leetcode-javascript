/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let n = prices.length;
  if (n < 2) return 0;
  let buy = Array.from({length: n}, _ => 0);
  let sell = Array.from(buy);
  buy[0] = -prices[0];
  buy[1] = Math.max(-prices[1], - prices[0]);
  sell[0] = 0;
  sell[1] = Math.max(prices[1] - prices[0], 0);
  for (let i = 2; i < n; i++) {
    sell[i] = Math.max(buy[i - 1] + prices[i], sell[i - 1]);
    buy[i] = Math.max(sell[i - 2] - prices[i], buy[i - 1]);
  }
  return sell[n - 1];
};

/**
 * 122题的基础上增加了个冷却期的概念。初始化两个动态规划数组，buy[i]表示i天前手持股票的最大利润，
 * sell[i]表示i天前卖出股票的最大利润，两个状态转移方程求解
 */