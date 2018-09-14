/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';
  let c = countAndSay(n - 1);
  let res = '';
  for (let i = 0; i < c.length; i++) {
      let cnt = 1;
      while (c[i] === c[i + 1] && i < c.length) {
          cnt++;
          i++;
      }
      res += cnt + c[i]; 
  }
  return res;
};

/**
 * 由于对于n的每次变化都是基于n - 1的，适合递归来解，找出一组变化规律转化为代码即可。
 */