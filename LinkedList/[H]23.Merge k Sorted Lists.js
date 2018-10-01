/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) return null;
  let n = lists.length;
  while (n > 1) {
      let k = Math.floor((n + 1) / 2);
      for (let i = 0; i < Math.floor(n / 2); i++) {
          lists[i] = helper(lists[i], lists[i + k]);
      }
      n = k;
  }
  return lists[0];
};

function helper(l1, l2) {
  let dummy = {
      next: null
  };
  let cur = dummy;
  while (l1 && l2) {
      if (l1.val < l2.val) {
          cur.next = l1;
          l1 = l1.next;
      } else {
          cur.next = l2;
          l2 = l2.next;
      }
      cur = cur.next;
  }
  if (l1) cur.next = l1;
  if (l2) cur.next = l2;
  return dummy.next;
}

/**
 * 这题要实现通用的合并k条链表方法，那么其实还是要一条条合并，可以用分治
 * 法减小时间复杂度。
 */