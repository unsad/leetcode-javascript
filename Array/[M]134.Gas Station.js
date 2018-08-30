/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let start = 0;
    let sum = 0;
    let total = 0;
    for (let i = 0; i < gas.length; i++) {
      sum += gas[i] - cost[i];
      total += gas[i] - cost[i];
      if (sum < 0) {
        start = i + 1;
        sum = 0;
      }
    }
    return total < 0 ? -1 : start;
};

/**
 * 这题最初拿到手最容易想到的是两层遍历算sum，小于0则跳出当前循环，很显然这样O(n^2)时间复杂度
 * 过高会TLE，这里要优化的关键点在于找出一个规律：
 * 起点之后的sum是不可能小于0的，换句话说如果从index为0开始遍历累加，当小于0时，前面的所有
 * index都不能作为起点
 */