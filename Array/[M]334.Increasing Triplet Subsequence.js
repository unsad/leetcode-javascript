/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	let m1 = Number.MAX_SAFE_INTEGER, m2 = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < nums.length; i++) {
		if (m1 >= nums[i]) {
			m1 = nums[i];
		} else if (m2 >= nums[i]) {
			m2 = nums[i];
		} else {
			return true;
		}
	}
	return false;
};

/**
 * 这种题拿到手比较容易想到的解法是动态规划，dp[i]代表i之前不大于nums[i]的个数，两层遍历
 * 即可解决。不过由于要求线性时间复杂度就要考虑更特殊的解法。这里用两个变量m1和m2分别记录遍历
 * 过程中最小和第二小的数。那么只要有一个数大于m1和m2，则可以返回true。
 */