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
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let cnt = head.next;
  head.next = swapPairs(head.next.next);
  cnt.next = head;
  return cnt;
};
/**
 * 成对的交换节点，这种题首先想到递归，每两个节点一组，头节点指向下一组交换后的头结点，
 * 头结点的下一节点指向头结点即完成交换。
 */