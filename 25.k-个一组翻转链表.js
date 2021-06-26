/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (head == null) return null;
    let b = head, a = head;
    for (let i = 0; i < k; i++) {
        if (b == null) return head;
        b = b.next;
    }

    // 反转[a,b)区间的链表
    const newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
};
const reverse = function(a, b) {
    let pre = null, cur = a, next = a;
    while (cur !== b) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    } 
    return pre;
}
// @lc code=end

