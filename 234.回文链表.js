/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

var isPalindrome = function (head) {
    let midNode = findMid(head);
    let left = head, right = reverse(midNode);
    while (right !== null) {
        if (left.val !== right.val) {
            return false
        }
        left = left.next;
        right = right.next;
    }
    return true;
}      

var findMid = function (head) {
    // 1. 找到链表的中点
    let slow = head, fast = head;
    while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if (fast !== null) slow = slow.next;
    return slow;
}

var reverse = function (node) {
    let prev = null;
    let cur = node;
    while (cur !== null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}
// @lc code=end

