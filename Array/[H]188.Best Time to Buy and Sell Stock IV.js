/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
	let n = prices.length;
    if (!n) return 0;
    if (k >= n) return helper(prices);
    let dpl = Array.from({length: n},_ => Array.from({length: k + 1}).fill(0));
    let dpg = Array.from({length: n},_ => Array.from({length: k + 1}).fill(0));
    for (let i = 1; i < n; i++) {
    	let diff = prices[i] - prices[i - 1];
    	for (let j = 1; j <= k; j++) {
    		dpl[i][j] = Math.max(dpg[i - 1][j - 1] + Math.max(diff, 0), dpl[i - 1][j] + diff);
			  dpg[i][j] = Math.max(dpg[i - 1][j], dpl[i][j]);
    	}
    }
    return dpg[n - 1][k];
};

function helper(prices) {
	let res = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - prices[i - 1] > 0) {
			res += prices[i] - prices[i - 1];
		}
	}
	return res;
}

/**
 * 123题基础上的通解算法，最多2次交易变成k次交易，就不能用123的取巧解法了。初始化两个动态规划二维数组，dpl[i][j]
 * 表示第i天进行了第j次交易的最大盈利，dpg[i][j]表示第i天最多j次交易的最大盈利。由此可得两个状态转移方程求解。
 * 当k大于数组长度时算法可以转化为122题解。
 */