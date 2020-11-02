/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (40.45%)
 * Likes:    1093
 * Dislikes: 0
 * Total Accepted:    276.8K
 * Total Submissions: 684K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
 * 
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
 * @param {number} n
 * @return {ListNode}
 */
/**
 * 思路： 1. 计算链表长度
 *       2. 正向遍历
 * 哨兵节点是用来简化边界问题的虚设对象，在插入或删除时，第一个元素没有前驱节点
 * 如果没有特殊处理，在插入或删除时会导致报错
 */
var removeNthFromEnd = function(head, n) {
    // 哨兵
    var pHead = new ListNode(0);
    pHead.next = head;

    var count = 0, p = head;
    while (p !== null) {
        p = p.next;
        count++
    }
    p = pHead;

    for (var i = 0; i < count - n; i++) {
        p = p.next;
    }
    // 直接跳过被删除的点
    p.next = p.next.next
    return pHead.next
};
// @lc code=end

