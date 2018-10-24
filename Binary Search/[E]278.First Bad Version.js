/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let arr = Array.from(n, (_, index) => index + 1);
      let left = 0;
      let right = n - 1;
      while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (!isBadVersion(mid)) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return left;
  };
};

/**
 * 找出坏的一个产品，最基本的二分
 */