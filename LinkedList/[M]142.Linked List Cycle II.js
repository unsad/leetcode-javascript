/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) break;
  }
  if (!fast || !fast.next) return null;
  slow = head;
  while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
  }
  return fast;
};

/**
 * 这也是很经典的一道链表环题，找出链表的环起始处。
 * 用快慢指针分别遍历，当两者相遇时跳出循环。这时
 * 再将慢指针移到起点，和相遇处以共同速度遍历，再相遇即
 * 为环的起点。
 */