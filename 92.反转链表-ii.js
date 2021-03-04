/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let nextTail = null;
    let reverseN = (head,n) => {
        if(n == 1){
            nextTail = head.next;
            return head; 
        }
        let last = reverseN(head.next,n-1);
        head.next.next = head;
        head.next = nextTail;
        return last;
    }
    if(m == 1){
        return reverseN(head,n);
    }
    head.next = reverseBetween(head.next,m-1,n-1);
    return head;
};

// @lc code=end

