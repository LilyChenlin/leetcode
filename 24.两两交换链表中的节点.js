/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
    const dummyNode = new ListNode(0);
    dummyNode.next = head;
    let temp = dummyNode;
    if (temp.next !== null && temp.next.next !== null) {
        const temp1 = temp.next;
        const temp2 = temp.next.next;
        temp.next = temp2;
        temp1.next = temp2.next;
        temp2.next = temp1;
        temp = temp1;
    }
    return dummyNode.next;
};
// @lc code=end

