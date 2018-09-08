/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let res = [1];
  for (let i = 1; i < nums.length; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1;i >= 0; i--) {
    res[i] *= right;
    right *= nums[i]; 
  }
  return res;
};

/**
 * 这题规定不能用除法，那么常规思路求总乘积后除以自身不可行，就反过来思考，乘以除了自己之外
 * 的所有数，从两个方向遍历累乘即可。
 */