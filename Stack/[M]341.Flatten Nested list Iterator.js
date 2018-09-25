
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.stack = Array.from(nestedList).reverse();
};


/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  while(this.stack.length) {
      let cnt = this.stack[this.stack.length - 1];
      if (cnt.isInteger()) return true;
      this.stack.pop();
      for (let i = cnt.getList().length - 1; i >= 0; i--) {
          this.stack.push(cnt.getList()[i]);
      }
  }
  return false;
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  return this.stack.pop().getInteger();
};

/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/

/**
 * 用迭代器打平数组，那么每次检测是否有下一个元素时，遇到嵌套数组就展开，注意展开的方向即可。
 */