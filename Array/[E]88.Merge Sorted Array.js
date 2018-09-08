/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let count = m + n - 1;
  m--;
  n--;
  while (m >=0 && n >= 0) {
      nums1[count--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
  while (n >= 0) nums1[count--] = nums2[n--];
};

/**
 * 由于合并数组可以确定长度等于num1，那么可以从num1末尾向前填充，两个指针分别指示两个数组的当前比较位按大小依次填入即可
 */