/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (70.83%)
 * Likes:    1310
 * Dislikes: 0
 * Total Accepted:    361.3K
 * Total Submissions: 510.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
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

/**
 * 边界条件，当链表为null或链表中仅有一个节点时，不需要反转
 */
var reverseList = function(head) {
    if (!head || !head.next) return head
    let prev = null, cur = head;
    while(cur) {
        // 记录下一个节点
        var next = cur.next;
        cur.next = prev;
        prev = cur
        cur = next
    }
    head = prev;
    return head;
};
// @lc code=end

