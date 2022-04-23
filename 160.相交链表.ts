/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA == null || headB == null) return null;  
    let pHeadA = headA, pHeadB = headB;
    while (pHeadA != pHeadB) {
        pHeadA = pHeadA == null ? headB : pHeadA.next;
        pHeadB = pHeadB == null ? headA : pHeadB.next;
    }
    return pHeadA;
};
// @lc code=end

