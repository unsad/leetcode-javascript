/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let n = temperatures.length;
  let res = Array.from({length: n}, _ => 0);
  let stack = [];
    for (let i = 0; i < n; ++i) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop();
            res[idx] = i - idx;
        }
        stack.push(i);
    }
    return res;
};

/**
 * 求每个位置元素距离其前方比他大的元素的位置距离，递减栈解决，遍历遇到第一个比栈顶大的元素时
 * 就可以算出栈顶位置的元素所需结果。
 */