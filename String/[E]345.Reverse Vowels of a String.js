/**
 * @param {string} s
 * @return {string}
 */
function check(s) {
  return /[aeiou]/i.test(s);
}
var reverseVowels = function(s) {
  s = s.split("");
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
      while (!check(s[left])) {
          left++;
      }
      while(!check(s[right])) {
          right--;
      }
      if (left < right) {
          let temp = s[right];
          s[right] = s[left];
          s[left] = temp;
          right--;
          left++;
      }
  }
  return s.join("");
};

/**
 * 翻转元音字母，从左右初始化两个指针遍历，记录元音位置交换直到相遇即可
 */