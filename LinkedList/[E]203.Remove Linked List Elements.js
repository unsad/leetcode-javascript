/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = {
      next: head
  }
  let pre = dummy;
  while (pre.next) {
      if (pre.next.val === val) {
          let cnt = pre.next;
          pre.next = cnt.next;
          cnt.next = null;
          delete t;
      } else {
          pre = pre.next;
      }
  }
  return dummy.next;
};

/**
 * 移除指定值节点，那么还是需要两个指针，当后一指针命中移除值时，使用前一指针执行
 * 移除操作
 */