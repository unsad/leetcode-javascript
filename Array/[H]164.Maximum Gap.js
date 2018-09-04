/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (!nums.length) return 0;
  let mx = Math.max(...nums);
  let mn = Math.min(...nums);
  let size = Math.floor((mx - mn) / nums.length + 1);
  let bucketNums = Math.floor((mx - mn) / size) + 1;
  let bucketMin = Array.from({length: bucketNums}, _ => Number.MAX_SAFE_INTEGER);
  let bucketMax = Array.from(bucketMin, _ => Number.MIN_SAFE_INTEGER);
  let log = new Set();
  for (let num of nums) {
      let idx = Math.floor((num - mn) / size);
      bucketMin[idx] = Math.min(bucketMin[idx], num);
      bucketMax[idx] = Math.max(bucketMax[idx], num);
      log.add(idx);
  }
  let pre = 0;
  let res = 0;
  for (let i = 1; i < bucketNums; i++) {
      if (!log.has(i)) continue;
      res = Math.max(res, bucketMin[i] - bucketMax[pre]);
      pre = i;
  }
  return res;
};

/**
 * 线性复杂度内求未排序数组排序后的相邻元素最大间隔，最容易想到的思路还是排序后计算，线性复杂度排序有桶排序和基数排序，
 * 这里用桶排序。考虑一下如何分桶，最好的结果就是最大相邻元素不在同一桶内，就可以遍历桶然后取桶中极值计算。顺着这个思路，
 * 分桶就可以用nums中的最大值和最小值取差再除以nums长度加1保证上述条件，再在每个桶内不用排序，只需维护极值即可，同时用Set
 * 记录有元素的桶。最后遍历有元素的桶计算相邻桶的最小值与最大值之差取最大值即可。
 */