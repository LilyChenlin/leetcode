/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let mergeList = new ListNode(0);
    let dummyHead = mergeList;
    while(list1 || list2) {
        if (!list2) {dummyHead.next = list1; break;};
        if (!list1) {dummyHead.next = list2; break;};

        if (list1.val >= list2.val) {
            dummyHead.next = new ListNode(list2.val);
            list2 = list2.next;
        } else {
            dummyHead.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        dummyHead = dummyHead.next;
    }
    return mergeList.next;
};
// @lc code=end

