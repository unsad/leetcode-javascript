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
var sortList = function(head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let pre = head;
  while (fast && fast.next) {
      pre = slow;
      slow = slow.next;
      fast = fast.next.next;
  }
  pre.next = null;
  return merge(sortList(head), sortList(slow));
};

function merge(l1, l2) {
  let dummy = {
      next: null
  };
  let cur = dummy;
  while (l1 && l2) {
      if (l1.val < l2.val) {
          cur.next = l1;
          l1 = l1.next;
      } else {
          cur.next = l2;
          l2 = l2.next;
      }
      cur = cur.next;
  }
  if (l1) {
      cur.next = l1;
  }
  if (l2) {
      cur.next = l2;
  }
  return dummy.next;
}

/**
 * 排序链表，还要求O(nlogn)复杂度，那么首先考虑归并排序，链表形式的归并也比较容易实现。
 */