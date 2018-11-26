/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
	let res = [];
    for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;
    	if (nums[idx] < 0) {
    		res.push(idx + 1);
    	} else {
    		nums[idx] = -nums[idx];
    	}
    }
    return res;
};

/**
 * 1到n的经典题型，三种思路，这里选择正负标记
 */