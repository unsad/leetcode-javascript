/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let n = height.length - 1;
  let left = 0, right = n, level = 0, res = 0;
  while (left < right) {
    let lower = height[height[left] < height[right] ? left++ : right--];
    level = Math.max(level, lower);
    res += level - lower;
  }
  return res;
};

/**
 * 这一题有点像11题，同样是求水容量，依然需要维护两个指针，所处高度较小的指针往内移动，
 * 如果移动后idx所处高度低于移动前，则高度差代表移动后idx能存储的水量，如果移动后idx不低于
 * 移动前，则此处可以作为新边缘继续往下推。最终重合时算得总存储量。
 */