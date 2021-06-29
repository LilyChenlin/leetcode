/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (64.59%)
 * Likes:    1349
 * Dislikes: 0
 * Total Accepted:    399.5K
 * Total Submissions: 618.5K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * 声明一个空对象存链表
 * 解法一：迭代
 */
var mergeTwoLists = function(l1, l2) {
    let dummyHead = head = new ListNode(0);
    while (l1 !== null || l2 !== null) {
        if (l1 == null) {
            dummyHead.next = l2;
            break;
        } else if (l2 == null) {
            dummyHead.next = l1;
            break;
        } else if (l1.val <= l2.val) {
            dummyHead.next = new ListNode(l1.val);
            l1 = l1.next;
        } else if (l1.val > l2.val){
            dummyHead.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        dummyHead = dummyHead.next;
    }
    return head.next;
};
// @lc code=end

