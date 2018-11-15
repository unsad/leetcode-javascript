/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let flat = [];
  nums.forEach(arr => {
      flat = flat.concat(arr);
  });
  let total = nums.length * nums[0].length;
  let newArr = [];
  if (r * c !== total) return nums;
  for (let i = 0; i < r; i++) {
      let arr = [];
      for (let j = 0; j < c; j++) {
          arr.push(flat.shift());
      }
      newArr.push(arr);
  }
  return newArr;
};

/**
 * 重塑矩阵。先打平再按照重塑的行列数遍历分配
 */