/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

/**
 * 由于只给了需要删除的节点，那么不能通过常规修改指针的形式删除，只能更新当前
 * 节点值为下一节点值，再删除下一节点。
 */