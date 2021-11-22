/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function(head, k) {
    if(head == null || k == 0) return head;
    // 计算链表长度
    let len = 0;
    let node = head;
    while (node !== null && ++len > 0) node = node.next;
    k = k%len;
    if (k == 0) return head;
    //快慢指针
    let fast = head, slow = head;
    while (k-- > 0) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    let nHead = slow.next;
    slow.next = null;
    fast.next = head;
    return nHead;
}; 

// @lc code=end

