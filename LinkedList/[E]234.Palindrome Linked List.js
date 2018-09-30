/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;
  let stack = [head.val];
  while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
      stack.push(slow.val);
  }
  if (!fast.next) {
      stack.pop();
  }
  while (slow.next) {
      slow = slow.next;
      if (slow.val !== stack.pop()) return false;
  }
  return true;
};

/**
 * 判断是否是回文链表，由于链表不能类似数组一样索引，判断回文需要先找到中间节点。
 * 快慢指针同时前进，快指针走到末尾时，慢指针到中间。同时用一个栈存储前段值，再让慢
 * 指针遍历后段，并和栈内元素比较即可。
 */