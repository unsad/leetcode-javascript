/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
	if (!head) return 0;
	let res = 0;
	let flag = false;
    while (head) {
    	if (G.includes(head.val)) {
            if (!flag) {
                res++;
                flag = true;
            }
        } else {
    		flag = false;
    	}
        head = head.next;
    }
    return res;
};

/**
 * 检测数组G中的元素能组成链表的几部分，那么用一个标记变量flag代表处于一部分的计算中。
 * 遍历链表，当G有链表元素时标记设置为true，直到G中没有链表元素时标记设置为false，完成一段计算
 */