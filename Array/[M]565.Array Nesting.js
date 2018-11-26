/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
	const linkArr = [];
    for (let i = 0; i < nums.length; i++) {
    	if (linkArr.every(item => !item.includes(nums[i]))) {
    		let link = [];
    		let val = nums[i];
    		while(!link.includes(val)) {
    			link.push(val);
    			val = nums[val];
    		}
    		linkArr.push(link);
    	}
    }
    return Math.max(...linkArr.map(item => item.length))
};

/**
 * 值和位置的映射关系，求最长的环。那么遍历时对每个值求环，注意过滤已经成环的值。当遍历完成时取最长的环即可
 */