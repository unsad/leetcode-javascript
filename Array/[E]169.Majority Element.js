/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? ++obj[nums[i]] : 1; 
  }
  for (let item of Object.keys(obj)) {
    if (obj[item] >= nums.length / 2) {
      return Number(item)
    }
  }
};

/**
 * 常规的map计数解决
 */