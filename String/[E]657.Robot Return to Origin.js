/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let pos = {x: 0, y: 0};
  for (let i = 0; i < moves.length; i++) {
      if (moves[i] === 'U') pos.y += 1;
      if (moves[i] === 'D') pos.y -= 1;
      if (moves[i] === 'L') pos.x -= 1;
      if (moves[i] === 'R') pos.x += 1;
  }
  return pos.x === 0 && pos.y === 0
};

/**
 * 按题意翻译判断是否回到原点即可
 */