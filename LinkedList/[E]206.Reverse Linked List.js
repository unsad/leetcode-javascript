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
var reverseList = function(head) {
	let pre = null;
    while (head) {
    	let tmp = head.next;
    	head.next = pre;
    	pre = head;
    	head = tmp;
    }
    return pre;
};

/**
 * 经典的基础反转链表题
 */