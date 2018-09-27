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
var oddEvenList = function(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  while (even && even.next) {
      let tmp = odd.next;
      odd.next = even.next;
      even.next = odd.next.next;
      odd.next.next = tmp;
      even = even.next;
      odd = odd.next;
  }
  return head;
};

/**
 * 分离奇偶节点，那么需要两个指针分别管理，每次交换后让两个指针分别指向当前奇节点末尾和未交换偶节点首部。
 */