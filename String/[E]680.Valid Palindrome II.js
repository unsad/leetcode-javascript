/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isValid(s, left, right - 1) || isValid(s, left + 1, right)
    }
    ++left;
    --right;
  }
  return true;
};

function isValid(s, left, right) {
  while(left < right) {
  if  (s[left] !== s[right]) return false;
  ++left;
  --right;
  }
  return true;
}

/**
 * 这题在判断回文的基础增加了一个错误字符的可操作空间，那么在碰到不匹配回文时，跳过任意一个继续判断，只要其中一个
 * 满足回文就可
 */