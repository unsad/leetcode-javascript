/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let arr = path.split('/').filter(item => item);
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
      if (/[a-z]/i.test(arr[i])) {
          stack.push(arr[i]);
      }
      if (arr[i] === '...') {
          stack.push(arr[i]);
      }
      if (arr[i] === '..') {
          stack.pop();
      }
  }
  return '/' + stack.join('/');
};

/**
 * 转化文件路径，需要特殊处理的路径就是..，用栈记录当前深度，遇到..时出栈
 */