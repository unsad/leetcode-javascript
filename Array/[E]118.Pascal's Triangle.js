var generate = function(numRows) {
  if (numRows <= 0) return [];
  let res = Array.from({length: numRows}).map(item => []);
  for (let i = 0; i < numRows; i++) {
    res[i][0] = 1;
    if (i === 0) continue;
    for (let j = 1; j < i; j++) {
      res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
    }
    res[i].push(1);
  }
  return res;
};

/**
 * 按题意翻译为代码即可，注意边界处理
 */