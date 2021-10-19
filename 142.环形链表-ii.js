/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let cycleSet = new Set();
    let dummy = head;
    while (dummy !== null) {
        if (cycleSet.has(dummy)) {
            return dummy;
        }
        cycleSet.add(dummy);
        dummy = dummy.next;
    }
    return null;
};
// @lc code=end

