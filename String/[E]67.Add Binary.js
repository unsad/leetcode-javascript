/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a.length < b.length) {
      [a, b] = [b, a]
  }
  let etr = 0;
  let c = '';
  for (let i = 1; i <= a.length; i++) {
      let fin;
      let res = +a[a.length - i] + (+b[b.length - i] || 0) + etr;
      if (res > 1) {
          fin = res - 2;
          etr = 1;
      } else {
          fin = res;
          etr = 0;
      }
          c = fin + c;
  }
  if (etr === 1) c = 1 + c;
  return c;
};

/**
 * 实现二进制计算，逻辑不复杂就是繁琐，注意进位即可
 */