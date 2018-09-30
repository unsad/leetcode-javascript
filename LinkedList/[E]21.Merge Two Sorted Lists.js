/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val > l2.val) {
      let temp = l2;
      l2.next = mergeTwoLists(l1, l2.next);
      return temp;
  } else {
      let temp = l1;
      l1.next = mergeTwoLists(l1.next, l2);
      return temp;
  }
};

/**
 * 合并排序链表，比较常规的题，两个指针管理，遍历和递归都很容易理解，这里选择递归
 */