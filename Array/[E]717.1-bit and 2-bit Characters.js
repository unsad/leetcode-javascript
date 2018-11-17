/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let i = 0;
  while(i < bits.length - 1) {
      if (bits[i] === 1) {
          i += 2;
      } else {
          i++;
      }
  } 
  return i === bits.length - 1 && bits[i] === 0
};

/**
 * 这题的关键在于遍历时遇到1需要计数两位，注意结束遍历的条件
 */