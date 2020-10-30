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
    var res = {};
    var pHead = res;
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            pHead.next = l1;
            l1 = l1.next;
        } else {
            pHead.next = l2;
            l2 = l2.next
        }
        pHead = pHead.next;
    }
    pHead.next = l1 == null ? l2 : l1;
    return res.next
};
/**
 * 解法二：递归
 */
var mergeTwoLists = function(l1, l2) {
    var res = {};
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    if (l1.val < l2.val) {
        res = l1;
        l1.next = mergeTwoLists(l1.next, l2);
    } else {
        res = l2;
        l2.next = mergeTwoLists(l1, l2.next)
    }
    return res
};
// @lc code=end

