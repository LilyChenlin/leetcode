/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let head1 = null, head2 = null;
    let flag = 0;
    while (l1 || l2 ) {
        let val1 = !l1 ? 0 : l1.val;
        let val2 = !l2 ? 0 : l2.val;
        let cur = val1 + val2 + flag;
        if (!head1) {
            head1 = head2 = new ListNode(cur % 10);
        } else {
            head2.next = new ListNode(cur % 10);
            head2 = head2.next;
        }
        flag = Math.floor(cur / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (flag > 0) {
        head2.next = new ListNode(flag);
    }
    return head1;
};
// @lc code=end

