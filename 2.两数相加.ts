/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let cur = new ListNode(0);
    let carry = 0; // 进位1

    let temp = cur;
    while(l1 || l2) {
        let val1 = l1 == null ? 0 : l1.val;
        let val2 = l2 == null ? 0 : l2.val;

        let sum = val1 + val2 + carry;
        let curVal = sum % 10;
        carry = Math.floor(sum / 10);

        let curNode = new ListNode(curVal);
        temp.next = curNode;
        temp = temp.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry !== 0) {
        temp.next = new ListNode(carry);
    }
    return cur.next;
};
// @lc code=end

