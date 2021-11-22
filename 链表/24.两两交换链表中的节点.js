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

 // 递归方式
// var swapPairs = function(head) {
//     if (head == null || head.next == null) {return head};
//     let newHead = head.next;
//     head.next = swapPairs(newHead.next);
//     newHead.next = head;
//     return newHead;
// };

// 迭代方式
var swapPairs = function(head) {
    const dummyNode = new ListNode(0);
    dummyNode.next = head;
    let temp = dummyNode;
    while (temp.next !== null && temp.next.next !== null) {
        const code1 = temp.next;
        const code2 = temp.next.next;
        temp.next = code2;
        code1.next = code2.next;
        code2.next = code1;
        temp = code1;
    }
    return dummyNode.next;
};


// @lc code=end

