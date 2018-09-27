/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  let map = new Map();
  map.set(0, 0);
  let res = 0;
  let level = 0;
  for (let i = 0; i < input.length; i++) {
      let start = i;
      while (i < input.length && input[i] !== '\n' && input[i] !== '\t') {
          i++;
      }
      if (input[i] === '\n' || i >= input.length) {
          let cnt = input.slice(start, i);
          if (cnt.includes('.')) {
              res = Math.max(map.get(level) + cnt.length, res);
          } else {
              level++;
              map.set(level, map.get(level - 1) + cnt.length + 1);
          }
          level = 0;
      } else {
          level++;
      }
  }
  return res;
};

/**
 * 用map记录每层深度，遍历原字符串，当遇到文件时，根据当前层级深度更新最大深度。
 * 当遇到文件夹时，层级加一，并更新上层深度。
 */