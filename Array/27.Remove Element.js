
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[res++] = nums[i];
		}
	}
	return res;
};

/** 
 * 基础数组题，遍历计数即可。
 */