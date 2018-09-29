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
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  let dummy = {
      next: head
  };
  let pre = dummy;
  while (pre.next) {
      let cur = pre.next;
      while (cur.next && cur.next.val === cur.val) {
          cur = cur.next;
      }
      if (cur !== pre.next) {
          pre.next = cur.next;
      } else {
          pre = pre.next;
      }
  }
  return dummy.next;
};

/**
 * 83的变种，需要移除所有重复过的节点，主要思路还是用两个指针来记录比较，多考虑一种情况即可。
 */