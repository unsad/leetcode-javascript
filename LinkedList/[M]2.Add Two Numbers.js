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
var addTwoNumbers = function(l1, l2) {
	let dummy = {
		next: null
	};
	let cur = dummy;
    let left = l1;
    let right = l2;
    let lift = 0;
  
    while (left || right) {
    	let leftVal = left ? left.val : 0;
    	let rightVal = right ? right.val : 0;
    	cur.next = new ListNode((leftVal + rightVal + lift)  % 10);
    	cur = cur.next;
    	lift = Math.floor((leftVal + rightVal + lift) / 10);
    	left = left ? left.next : null;
    	right = right ? right.next : null;
    }
    if (lift) {
    	cur.next = new ListNode(lift);
    }
    return dummy.next;
};

/**
 * 2题解，两个指针分别管理左右两边当前参与计算值，注意处理进位问题
 */