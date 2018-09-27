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
var hasCycle = function(head) {
  if (!head) return false;
  let fast = head;
  let slow = head;
  while(1) {
      if (!fast.next || !fast.next.next) return false;
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow || fast.next === slow) return true;
  }
};

/**
 * 判断链表是否成环，环题最先想到快慢指针，如果成环的话，快指针必定会追上慢指针。
 */