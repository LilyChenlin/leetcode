/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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
// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let ans = null;
    for (let i = 0; i < lists.length; i++) {
        ans = mergeTwoLists(ans, lists[i]);
    }
    return ans;
};

function mergeTwoLists(a: ListNode, b: ListNode) {
    if (a == null || b == null) return a !== null ? a : b;
    let head = new ListNode(0);
    let tail = head, aPtr = a, bPtr = b;
    while (aPtr !== null && bPtr !== null) {
        if (aPtr.val > bPtr.val) {
            tail.next = bPtr;
            bPtr = bPtr.next;
        } else {
            tail.next = aPtr;
            aPtr = aPtr.next;
        }
        tail = tail.next;
    }
    tail.next = aPtr == null ? bPtr : aPtr;
    return head.next;
}
// @lc code=end

