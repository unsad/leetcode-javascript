/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let total = [];
    ops.forEach((item, index) => {
        if (item === 'C') {
            total.pop();
        }
        if (item === 'D') {
            total.push(total[total.length - 1] * 2);
        }
        if (item === '+' ) {
            total.push(total[total.length - 2] + total[total.length - 1]);
        }
        if (!Number.isNaN(+item)) {
            total.push(+item);
        }
    })
    return total.reduce((a, b) => a + b);
};

/**
 * 使用栈按题意规则遍历积分，遍历完成用reduce求和
 */