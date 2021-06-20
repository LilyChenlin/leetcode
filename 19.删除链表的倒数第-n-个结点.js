/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head == null) return [];
    // 倒数第n个结点 就是正数len - n + 1
    let copyHead = head;
    let len = 1;
    while (copyHead.next !== null) {
        len++;
        copyHead = copyHead.next;
    }
    console.log(len)
    let m = len - n + 1;
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let cur = dummyHead;
    for (let i = 1; i < m; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return dummyHead.next;

};
// @lc code=end

