/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let dummy = {next: head};
  let start = dummy;
  while (--m) {
      start = start.next;
      n--;
  }
  let cur = start.next;
  while (--n) {
      let tmp = cur.next;
      cur.next = tmp.next;
      tmp.next = start.next;
      start.next = tmp;
  }
  return dummy.next;
};

/**
 * 翻转部分链表，那么原理和翻转链表是一样的，找好起始和结束位置即可。
 */