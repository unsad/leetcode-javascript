/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
  let p1 = a.split('+');
  let p2 = b.split('+');
  let a1 = +p1[0];
  let b1 = +p2[0];
  let a2 = +p1[1].slice(0, -1);
  let b2 = +p2[1].slice(0, -1);
  let r1 = a1 * b1 - a2 * b2;
  let r2 = a1 * b2 + a2 * b1;
  return r1.toString() + '+' + r2.toString() + 'i';
}

/**
 * 按题意拆分字符串计算，注意数字和字符串转化
 */