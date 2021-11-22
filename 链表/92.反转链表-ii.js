/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    const dummyNode = new ListNode(0);
    dummyNode.next = head;

    let pre = dummyNode;
    

    for (let i = 0; i < m - 1; i++) {
        pre = pre.next
    }
    let rightNode = pre;
    for (let i = 0; i < n - m + 1; i++) {
        rightNode = rightNode.next;
    }

    let leftNode = pre.next;
    let cur = rightNode.next;
    pre.next = null;
    rightNode.next = null;;

    reverse(leftNode);
    pre.next = rightNode;
    leftNode.next = cur;
    return dummyNode.next;

};

var reverse = (head) => {
    if (head == null || head.next == null) return head;
    let pre = null, cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

}
// @lc code=end

