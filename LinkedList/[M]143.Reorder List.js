/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next || !head.next.next) return;
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let mid = slow.next;
  slow.next = null;
  let last = mid;
  let pre = null;
  while (last) {
      let next = last.next;
      last.next = pre;
      pre = last;
      last = next;
  }
  while (head && pre) {
      let next = head.next;
      head.next = pre;
      pre = pre.next;
      head.next.next = next;
      head = next;
  }
};

/**重排链表，这题其实可以看做三个小题的组合，一是快慢指针将其从中间断开，
 * 二是翻转断开后第二条链表，三是合并链表，都是之前做过的题
 */