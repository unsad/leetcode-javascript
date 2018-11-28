/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
	let res = 0;
    let dp = Array.from({length: A.length + 1});
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(B.length + 1).fill(0);
    }
    for (let i = 0; i < A.length; i++) {
    	for (let j = 0; j < B.length; j++) {
    		if (A[i] === B[j]) {
    			dp[i + 1][j + 1] = dp[i][j] + 1;
    		}
    		res = Math.max(res, dp[i + 1][j + 1]);
    	}
    }
    return res;
};

/**
 * 求最长重复子数组。比较型的极值问题优先考虑动态规划，dp[i][j]表示A的前i个元素和B的前j个
 * 元素的最长重复子数组长度
 */