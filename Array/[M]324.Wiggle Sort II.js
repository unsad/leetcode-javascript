/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  let temp = Array.from(nums);
  let n = temp.length, mid = Math.floor((n + 1) / 2), j = n;
  temp.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
      nums[i] = i % 2 === 1 ? temp[--j] : temp[--mid];
  }
};

/**
 * 将一个乱序数组重排为摇摆数组，那么先排成有序数组，再从中间拆开，后一半一定比前一半大，依次填充即可
 */