/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return head;
  let dummy = {
      next: head
  };
  let newDummy = {
      next: null
  };  
  let cur = dummy;
  let p = newDummy;
  while (cur.next) {
      if (cur.next.val < x) {
          p.next = cur.next;
          p = p.next;
          cur.next = cur.next.next;
          p.next = null;
      } else {
          cur = cur.next;
      }
  }
  p.next = dummy.next;
  return newDummy.next;
};

/**
 * 这题要求局部排序链表，大于指定值的节点顺序不变，小于的要移到其前面。那么只要
 * 找到第一个大于或等于指定值的节点，再遍历链表，将小于其的节点置于该节点前即可。
 */