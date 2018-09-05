/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let m = board.length;
  let n = m ? board[0].length : 0;
  let dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  let dy = [-1, 0, 1, 1, 1, 0, -1, -1];
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          let cnt = 0;
          for (let k = 0; k < 8; k++) {
              let x = i + dx[k], y = j + dy[k];
              if (x >= 0 && x < m && y >= 0 && y < n && (board[x][y] === 1 || board[x][y] === 2)) {
                  cnt++;
              }
          }
          if (board[i][j] && (cnt < 2 || cnt > 3)) board[i][j] = 2;
          if (!board[i][j] && cnt === 3) board[i][j] = 3;
      }
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          board[i][j] %= 2;
      }
  }
};

/**
 * 这题的逻辑比较简单，难点在于变换对于每个位置是同时进行的，而遍历是有时间先后顺序的，又不能开辟新数组。参考了网络上的
 * 解法，思路在于创建状态机来表示先后状态，0为死到死，1为活到活，2为活到死，3为死到活，这样在遍历过程中同一个位置就能记录
 * 改变前后的信息了，最终再翻译为改变后信息即可。
 */