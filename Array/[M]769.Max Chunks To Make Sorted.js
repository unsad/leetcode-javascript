/**
 * @param {number[]} arr
 * @return {number}
 */
let maxChunksToSorted = arr => {
  let res = 0;
  let idx = -1;
  arr.forEach((n, i) => {
      if (n >= i) {
          idx = Math.max(idx, n)
      } 
      
      if (i == idx) {
          res++;
          idx = -1;
      }
  });
  return res;
};

/**
 * 由于限定了数组范围在0到n - 1之间，那么排好序之后每个位置的元素不应大于index。
 * 因此遍历时维护一个当前最大值，当这个最大值等于当前index时就可以划分区间了
 */