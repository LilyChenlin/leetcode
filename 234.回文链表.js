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

// 思路 1. 先通过快慢指针找到链表的中点
// 2. 然后从中点开始向后的链表进行反转 反转整个链表
// 3. 通过right和left进行一一判断
var isPalindrome = function(head) {

    // 1. 通过快慢指针找到链表的中点
    // 分两种情况 1. 如果fast指向null，则当前链表是奇数，直接找到链表中点
    // 2. 如果fast无法指向null，则当前链表是偶数，需要slow前进一步
    var slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast !== null) {
        slow = slow.next;
    }
    var left = head, right = reverse(slow);
    while (right !== null) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
};

var reverse = (head) => {
    var cur = head, pre = null;
    while(cur != null) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre
}
// @lc code=end

