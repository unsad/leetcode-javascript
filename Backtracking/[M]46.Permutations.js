/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	let res = [];
	let swap = function(nums, i, idx) {
		if (i !== idx) {
			let temp = nums[i];
			nums[i] = nums[idx];
			nums[idx] = temp;
		}
	}
	let helper = function(idx) {
		for (let i = idx; i < nums.length; i++) {
			swap(nums, i, idx);
			if (idx + 1 < nums.length - 1) {
				helper(idx + 1);
			} else {
				res.push(Array.from(nums));
			}
			swap(nums, i, idx);
		}
	}
	helper(0);
	return res;
};

/**
 * 经典的数组全排列问题，回溯解，每次调用记录头部位置，并将后续位置循环和头部交换即可
 */