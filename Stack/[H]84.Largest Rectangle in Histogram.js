/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let res = 0;
  let stack = [];
  heights.push(0);
  for (let i = 0; i < heights.length; i++) {
      if (!stack.length || heights[stack[stack.length - 1]] < heights[i]) {
          stack.push(i);
      } else {
          let cur = stack.pop();
          res = Math.max(res, heights[cur] * (stack.length ? (i - stack[stack.length - 1] - 1) : i));
          i--;
      }
  }
  return res;
};

/**
 * 只能想到暴力解法，但肯定是TLE的，查阅了大神的答案，用到了递增栈减少计算次数，因为当递增栈遇到一个小于
 * 栈顶的元素时，这个元素与递增栈内围成的面积肯定不如栈内第一个比他大的元素围成的面积大，那么就可以弹栈直到
 * 第一个比当前元素大的位置，并计算弹栈过程中围成的面积参与极值比较，再将当前元素推入递增栈继续循环，这样就
 * 可以减少多余的计算量。
 * 
 */