/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    // 偶数
    let small = new ListNode(0);
    let smallHead = small;

    // 奇数
    let large = new ListNode(0);
    let largeHead = large;

    let index = 1;
    while (head !== null) {
        if (index % 2 !== 0) {
            smallHead.next = head;
            smallHead = smallHead.next;
        } else if (index % 2 == 0) {
            largeHead.next = head;
            largeHead = largeHead.next;
        }
        head = head.next;
        index++;
    }
    largeHead.next = null;
    smallHead.next = large.next;
    return small.next;

};
// @lc code=end

