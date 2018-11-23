var findUnsortedSubarray = function(nums) {
	let newArr = Array.from(nums).sort((a, b) => a - b);
	let min = 0;
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== newArr[i]) {
			min = i;
			break;
		}
	}
	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[i] !== newArr[i]) {
			max = i;
			break;
		}
	}
 
	return max - min ? max - min + 1 : 0;
};

/**
 * 排好序后和原数组分别从首尾比较，遇到不同值就是要被排序的最小范围
 */