/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
    if(head == null || head.next == null) return head;
    let slow = head, fast = head.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let tmp = slow.next;
    slow.next = null;
    let leftSort = sortList(head);
    let rightSort = sortList(tmp);

    let cur = new ListNode(0);
    let copy = cur;
    while(leftSort !== null && rightSort !== null) {
        if(leftSort.val < rightSort.val) {
            copy.next = leftSort;
            leftSort = leftSort.next
        } else {
            copy.next = rightSort;
            rightSort = rightSort.next;
        }
        copy = copy.next;
    }
    copy.next = leftSort !== null ? leftSort : rightSort;
    return cur.next;
};
// @lc code=end

