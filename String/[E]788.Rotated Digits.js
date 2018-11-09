/**
 * @param {number} N
 * @return {number}
 */
function helper(num) {
  return /[2569]/.test(num) && !/[347]/.test(num)
}

var rotatedDigits = function(N) {
  let res = 0;
  for (let i = 0;i <= N; i++) {
      if (helper(i)) res++;
  }
  return res;
};

/**
 * 写个帮助函数判断旋转数，遍历计数即可
 */