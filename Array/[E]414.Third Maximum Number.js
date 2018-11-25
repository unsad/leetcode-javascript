/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
	let first = Number.MIN_SAFE_INTEGER;
	let second = Number.MIN_SAFE_INTEGER;
	let third = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] > third) {
    		first = second;
    		second = third;
    		third = nums[i];
    	} else if (nums[i] > second && nums[i] < third) {
    		first = second;
    		second = nums[i];
    	} else if (nums[i] > first && nums[i] < second) {
    		first = nums[i];
    	}
    }
    return first === Number.MIN_SAFE_INTEGER ? third : first;
};


/**
 * 求第三大的数，那么用三个变量分别保存三个数，遍历比较并按条件错位赋值
 */