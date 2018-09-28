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
  if (!head) return null;
  let pre = head;
  let cur = head.next;
  while (cur !== null) {
      if (cur.val === pre.val) {
          pre.next = cur.next;
      } else {
          pre = cur;
      }
      cur = cur.next;
  }
  return head;
};

/**
 * 移除排序后的重复节点，两个指针先后记录节点再比较即可。
 */