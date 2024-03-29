/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headB == null || headA == null) return null;
    let copyHeadA = headA, copyHeadB = headB;

    while (copyHeadA !== copyHeadB) {
        copyHeadA = copyHeadA == null ? headB : copyHeadA.next;
        copyHeadB = copyHeadB == null ? headA : copyHeadB.next
    }
    return copyHeadA;
};
// @lc code=end

