/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  let res = [];
  let dict = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  helper(digits, dict, 0, '', res);
  return res;
};

function helper(digits, dict, level, out, res) {
  if (level === digits.length) {
    res.push(out);
    return;
  }
  let str = dict[digits[level]];
  for (let i = 0; i < str.length; i++) {
    helper(digits, dict, level + 1, out + str[i], res);
  }
}

/**
 * 电话盘数字映射到字母组合，递归实现，根据给定数字个数记录层数，决定何时返回最终结果
 */