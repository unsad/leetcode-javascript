/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
      swap(nums, i, nums[i] - 1)
    }
  }
  for (let i = 0; i <  nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return nums.length + 1;
};

function swap (nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

/**
 * 这一题要求在O(n)时间和O(1)空间内完成，数组类型不能开辟额外空间的题看到应该很快想到如下三种思路
 * 1.数组下标标记法
 * 将nums[i]置换到相等的下标位置上去，利用下标记录更多的信息
 * 
 * 2.正负号标记法
 * 除了利用下标信息之外，还可以利用正负号信息， 将nums[i]对应nums[nums[i] - 1]上的数的正负做文章也可以记录更多信息
 * 
 * 3.数组长度累加法
 * 下标和正负之外，可以通过该位置的数值本身记录信息，将nums[i]对应的nums[nums[i] - 1]上累加数组长度记录更多信息
 * 
 * 以上3种方法根据数组题的具体要求做适当选择即可，这一题用的是1解法，不存在的第一个正数就是下标和值不对应的第一个下标，都对应上了则是数组长度加1。
 */

