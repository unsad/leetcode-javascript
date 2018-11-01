
var uniquePaths = function(m, n) {
	let dp = Array.from({length: m}, _ => []);
	for (let i = 0; i < m; i++) {
		dp[i][0] = 1;
	}
	for (let j = 0; j < n; j++) {
		dp[0][j] = 1;
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
		}
	} 
	return dp[m - 1][n - 1]
};

/**
 * 边缘每个点只有一种路径，由边缘往内部递推,dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
 */