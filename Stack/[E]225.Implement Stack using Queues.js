/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.arr = [];
};

MyStack.createNew = function() {
  return new MyStack();
}

/**
* Push element x onto stack. 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
 this.arr.unshift(x);
  for (let i = this.arr.length - 1; i > 0;i--) {
      this.arr.unshift(this.arr.pop());
  }
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  return this.arr.pop();
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.arr[this.arr.length - 1]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return !this.arr.length
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/

/**
 * 和232相反，用队列实现栈，同样修改push方法，但这题不需要额外开辟数组，队列剩余元素出队再入队即可
 */