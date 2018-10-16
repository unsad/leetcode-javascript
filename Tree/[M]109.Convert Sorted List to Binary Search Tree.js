/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);
  let slow = head;
  let fast = head;
  let last = slow;
  while (fast.next && fast.next.next) {
      last = slow;
      slow = slow.next;
      fast = fast.next.next;
  }
  fast = slow.next;
  last.next = null;
  let cur = new TreeNode(slow.val);
  if (head !== slow) {
      cur.left = sortedListToBST(head);
  }
  cur.right = sortedListToBST(fast);
  return cur;
};

/**
 * 108的follow up,排序数组变成排序链表，那么关键还是取中点，链表的中点用快慢指针解决
 */