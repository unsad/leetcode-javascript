/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let l = 0, r = numbers.length - 1;
       while (l < r) {
           let sum = numbers[l] + numbers[r];
           if (sum == target) return [l + 1, r + 1];
           else if (sum < target) ++l;
           else --r;
       }
       return [];
};

/**
 * 经典的开山题two sum，头尾指针解决
 */