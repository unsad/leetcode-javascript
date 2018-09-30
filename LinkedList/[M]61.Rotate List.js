/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null;
  let n = 1;
  let cur = head;
  while (cur.next) {
      n++;
      cur = cur.next;
  }
  cur.next = head;
  let m = n - k % n;
  for (let i = 0; i < m; i++) {
      cur = cur.next;
  }
  let newHead = cur.next;
  cur.next = null;
  return newHead;
};

/**
 * 旋转链表题，首先可以考虑先将链表结成环，然后找出旋转点，从其中断开即可
 */