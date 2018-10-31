var coinChange = function(coins, amount) {
  let dp = Array.from({length: amount + 1}, _ => amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
  for (let j = 0; j < coins.length; j++) {
    if (coins[j] <= i) {
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    } 
  }
  }
  return dp[amount] > amount ?  -1 : dp[amount];
};

/**
 * 类似279求完全平方数，两层循环更新dp[amount]为解，依赖于dp[i](i < amount)
 */