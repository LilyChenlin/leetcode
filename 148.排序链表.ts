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
    let sortArr = [];
    while (head != null) {
        const val = head.val;
        sortArr.push(val);
        head = head.next;
    }

    // 升序
    sortArr = sortArr.sort((a, b) => a - b);
    let node = new ListNode(), dummyNode = node;;
    for (let i = 0; i < sortArr.length; i++) {
        let temp = new ListNode(sortArr[i]);
        node.next = temp;
        node = node.next;
    }

    return dummyNode.next;
};
// @lc code=end

