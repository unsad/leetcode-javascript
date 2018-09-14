/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  let map = s.split('').reduce((map, item) => map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1),new Map());
   let stack = [0];
   for (let i = 0; i < s.length; i++) {
       let top = stack[stack.length - 1];
       map.set(s[i], map.get(s[i])  - 1);
       if (stack.includes(s[i])) continue;
       while (top > s[i] && map.get(top) > 0) {
           stack.pop();
           top = stack[stack.length - 1];
       }
       stack.push(s[i]);
   }
   return stack.slice(1).join('');
};

/**
 * 这题要求移除重复字母并尽可能按照字典序的顺序保留非重复字母，那么要保证每次选中的非重复字母字典序尽可能靠前，
 * 可以维护一个近似递增栈，对每个字母和栈顶比较，大于栈顶则可以排进去，如果小于栈顶说明栈顶元素应该尽可能的排在当前
 * 元素后面，如果后面还有栈顶元素就可以把栈顶元素弹出留到后续排，最终遍历完成，栈内也就是最终顺序了，这里栈中初始
 * 添加了一个0元素是为了循环时初次比较的方便。
 */