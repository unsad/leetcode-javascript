/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let res = [];
  let visited = new Set([s]);
  let q = [s];
  let found = false;
  while (q.length) {
      let cnt = q[0];
      q.shift();
      if (isValid(cnt)) {
          res.push(cnt);
          found = true;
      }
      if (found) continue;
      for (let i = 0; i < cnt.length; i++) {
          if (cnt[i] !== '(' && cnt[i] !== ')') continue;
          let str = cnt.slice(0, i) + cnt.slice(i + 1);
          if (!visited.has(str)) {
              q.push(str);
              visited.add(str);
          }
      }
  }
  return res;
};

function isValid(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
          cnt++;
      } else if (str[i] === ')' && --cnt < 0) {
          return false;
      }
  }
  return cnt === 0;
}

/**
 * 要求移除尽量少的子元素保证括号字符串有效，广度遍历，用一个set记录遍历
 * 过的子串，从头遍历一个个移除并验证有效性，如果遇到有效子串，用found变量
 * 记录并跳出。
 */