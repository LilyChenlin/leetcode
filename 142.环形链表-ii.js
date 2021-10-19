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
 * @description 哈希表实现环形链表
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     let cycleSet = new Set();
//     let dummy = head;
//     while (dummy !== null) {
//         if (cycleSet.has(dummy)) {
//             return dummy;
//         }
//         cycleSet.add(dummy);
//         dummy = dummy.next;
//     }
//     return null;
// };
/**
 * @description 快慢指针实现环形链表
 */
var detectCycle = function (head) {
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast == slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
}
// @lc code=end

