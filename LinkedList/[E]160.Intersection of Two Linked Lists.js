/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
      a = a ? a.next : headB;
      b = b ? b.next : headA;
  }
  return a;
};

/**
 * 虽然是简单题，但思路很巧妙。判断两个链表是否相交，那么让两个链表的末尾接上相对的首部，用两个指针
 * 遍历，如果相交，必然在相交点相遇，否则必然在空节点相遇。
 */