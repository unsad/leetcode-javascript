/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.store = [];
  this.temp = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  while (this.store.length) {
      this.temp.push(this.store.pop());
  }
  this.store.push(x);
  while (this.temp.length) {
      this.store.push(this.temp.pop());
  }
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
    return this.store.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  return this.store[this.store.length - 1];
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.store.length === 0;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = Object.create(MyQueue).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

/**
 * 用栈实现队列，需要一个辅助栈在push临时存储所有元素，保证push时的元素能顺利保存到栈底，
 * 再将辅助栈内的元素pop回来。
 */