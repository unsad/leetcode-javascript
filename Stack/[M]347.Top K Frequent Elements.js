/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let item of nums) {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  }
  let arr = Array.from(map);
  arr.sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map(item => item[0]);
};

/**
 * 返回前k频繁的数，直接想到map记录出现次数，再根据出现次数排序截取k位即可。
 */