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
    var a = head, b = head;
    for (let i = 0; i < k; i++) {
        // 如果不满足k个节点，则这个节点不需要反转，直接返回
        if (b == null) return head;
        b = b.next; // 递归找到b节点
    }
    // 反转某个区间的链表
    const newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead
};

// 反转[a,b) 
/**
 * 
 * @param {ListNode} a 
 * @param {ListNode} b 
 */
var reverse = function(a, b) {
    var pre = null, next = a, cur = a;

    // 终止条件
    while(cur !== b) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    // 返回反转后的头节点
    return pre
}
// @lc code=end

