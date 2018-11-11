/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let init = A;
  for (let i = 1; i < Math.ceil(B.length / init.length) + 2; i++) {
      if (A.includes(B)) return i;
      A += init;
  }
  return -1;
};

/**
 * 求A重复几次能包含B，那么最少两次，最多的时候长度超过B再加一次保证A的头尾和尾头组合都有。循环检查即可。
 */