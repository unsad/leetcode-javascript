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
var insertionSortList = function(head) {
  let dummy = {
      next: null
  };
  let cur;
  while (head) {
      let t = head.next;
      cur = dummy;
      while (cur.next && cur.next.val <= head.val) {
          cur = cur.next;
      }
      head.next = cur.next;
      cur.next = head;
      head = t;
  }
  return dummy.next;
};

/**
 * 插入排序的链表实现，比较容易，新建一条链表，遍历原链表每次取出头节点
 * 和新链表遍历比较插入即可
 */