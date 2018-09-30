
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
var reverseKGroup = function(head, k) {
  if (!head || k === 1) return head;
  let dummy = {
      next: head
  };
  let pre = dummy;
  let cur = head;
  let i = 0;
  while (cur) {
      i++;
      if (i % k === 0) {
          pre = reverse(pre, cur.next);
          cur = pre.next;
      } else {
          cur = cur.next;
      }
  }
  return dummy.next;

};

function reverse(pre, next) {
  let last = pre.next;
  let cur = last.next;
  while (cur !== next) {
      last.next = cur.next;
      cur.next = pre.next;
      pre.next = cur;
      cur = last.next;
  }
  return last;
}

/**
 * 按k组分类反转链表，思路并不复杂，用一个变量记录当前遍历位置，在满足条件
 * 的起始位开始翻转，并在此之前找出终止位，一次翻转完毕后，终止位又变为起始位。
 * 遍历结束后即可得结果。
 */