/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let n = nums.length;
  let res = Array.from({length: n}, (_) => -1);
  let stack = [];
  for (let i = 0; i < 2 * n; i++) {
    let num = nums[i % n];
    while(stack.length && nums[stack[stack.length - 1]] < num) {
      res[stack[stack.length - 1]] = num;
      stack.pop();
    }
    if (i < n) stack.push(i);
  }
  return res;
};


/**
 * 找到后面比当前元素大的第一个元素。和后面元素比较，除了暴力破解外，最先考虑递减栈。这题由于
 * 考虑循环，遍历长度要翻倍，取值要长度的余数。遇到比栈顶大的元素时就可以得栈顶对应元素位置的所求。
 * 对于遍历到长度超过原数组的部分，只需要提供比较数值而不需要重复求解，就不压入递减栈。
 */