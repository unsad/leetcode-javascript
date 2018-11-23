/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (!n) return true;
  for (let i = 0; i < flowerbed.length; i++) {
      if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
          flowerbed[i] = 1;
          n--;
      }
      if (!n) return true;
  }
  return false;
};

/**
 * 种花不能相邻，那么遍历时对0的左右同时判断就可以了
 */