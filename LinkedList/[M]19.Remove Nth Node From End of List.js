/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  let pre = head;
  let cur = head;
  for (let i = 0; i < n; i++) {
      cur = cur.next;
  }
  if (!cur) return head.next;
  while (cur.next) {
      cur = cur.next;
      pre = pre.next;
  }
  pre.next = pre.next.next;
  return head;
};

/**
 * 移除倒数第n个节点，那么需要两个指针找到倒数第n个节点的前一节点，先让一个节点走n步，
 * 再让两个节点一起走，前一节点走到末尾时，后一节点即到倒数第n个节点的前一节点。注意边界
 * 条件处理。
 */
