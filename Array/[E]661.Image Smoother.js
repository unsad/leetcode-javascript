/**
 * @param {number[][]} M
 * @return {number[][]}
 */
function isValid(x, y, M) {
  return x >= 0 && y >= 0 && x < M.length && y < M[0].length
}

function getAver(M, i, j) {
  let sum = 0;
  let count = 0;
  for (let val1 of [1, 0, -1]) {
      for (let val2 of [1, 0, -1]) {
          if (isValid(i + val1, j + val2, M)) {
              count++;
              sum += M[i + val1][j + val2];
          }
      }
  }
  return Math.floor(sum / count);
}

var imageSmoother = function(M) {
  let res = Array.from({length: M.length}).map(item => []);
  for (let i = 0; i < M.length; i++) {
      for (let j = 0; j < M[0].length; j++) {
          res[i][j] = getAver(M, i, j);
      }
  }
  return res;     
};
