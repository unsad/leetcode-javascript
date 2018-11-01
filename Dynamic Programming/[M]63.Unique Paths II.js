var uniquePathsWithObstacles = function(obstacleGrid) {
  const numberOfRows  = obstacleGrid.length;
  const numberOfCols  = obstacleGrid[0].length;
  const skeleton      = new Array(numberOfRows + 1).fill(new Array(numberOfCols + 1).fill(0))
  const numberOfPaths = JSON.parse(JSON.stringify(skeleton));
  
  numberOfPaths[0][1] = 1;
  
  obstacleGrid.forEach( (row, rowIdx) => {
    row.forEach( (element, colIdx) => {
      if(element !== 1) {
        const pathsFromTop = numberOfPaths[rowIdx][colIdx + 1];
        const pathsFromLeft = numberOfPaths[rowIdx + 1][colIdx];
        numberOfPaths[rowIdx + 1][colIdx + 1] = pathsFromTop + pathsFromLeft;
      }
    });
  });
  
  return numberOfPaths[numberOfRows][numberOfCols];
};

/**
 * 62题的延伸，新增了障碍，注意有障碍的地方跳过dp递推即可
 */