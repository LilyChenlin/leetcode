/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

 // 解法一
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let pNode = new ListNode(0);
//     pNode.next = head;

//     let
//         len = 0, // 统计链表长度
//         temp = head;
//     while (temp) {
//         temp = temp.next;
//         len++;
//     }

//     temp = pNode;
//     for (let i = 0; i < len - n; i++) {
//         temp = temp.next;
//     }

//     temp.next = temp.next.next;
//     return pNode.next;

// };

// 解法二 一次遍历 双指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;

    let p = dummyHead, q = dummyHead;

    for (let i = 0; i <= n; i++) {
        q = q.next;
    }

    while (q) {
        p = p.next;
        q = q.next;
    }

    p.next = p.next.next;
    return dummyHead.next;

};
// @lc code=end

