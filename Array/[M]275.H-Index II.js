/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let left = 0;
  let right = citations.length - 1;
  while (left <= right) {
  let mid = left + Math.floor((right - left) / 2);
    if (citations[mid] < citations.length - mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return citations.length - left;
};

/**
 * 和274完全一样，不过对时间复杂度有O(logn)要求，对这种时间复杂度第一时间想到二分查找解决
 */