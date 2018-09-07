/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	let res = [];
	let q = [];
	for (let i = 0; i < nums.length; i++) {
	    if (q.length && q[0] === i - k) q.shift();
	    while (q.length && nums[q[q.length - 1]] < nums[i]) q.pop();
	    q.push(i);
	    if (i >= k - 1) res.push(nums[q[0]]);
	}
	return res;
};

/**
 * 滑动窗口，这题关键在于维护一个递减的双向队列，首位元素表示窗口内的最大idx，同时保持注意最大数量内
 * 队列的出入即可。
 */