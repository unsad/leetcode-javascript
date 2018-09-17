/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let res = '';
  const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const value = [1000, 500, 100, 50, 10, 5, 1];
  
  for (let n = 0; n < 7; n += 2) {
      let x = Math.floor(num / value[n]);
      if (x < 4) {
          for (let i = 1; i <= x; i++) {
              res += roman[n];
          }
      } else if (x == 4) {
          res = res + roman[n] + roman[n - 1];
      } else if (x > 4 && x < 9) {
        res += roman[n - 1];
        for (let i = 6; i <= x; i++) {
          res += roman[n];
        }
      } else if (x === 9) {
          res = res + roman[n] + roman[n - 2];
        }
        num %= value[n];
      }
  return res;
};

/**
 * 13题的反转，逻辑不复杂就是繁琐，每3位一组拆分数字，根据具体大小映射到字母上按罗马字规则排序。
 */