/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head == null) return null;
    let arr = [] , dummy = head;
    while (dummy !== null) {
        arr.push(dummy);
        dummy = dummy.next;
    }
    
    let i = 0, j = arr.length - 1;
    while (i < j) {
        arr[i].next = arr[j];
        i++;
        if (i == j) {
            break;
        }
        arr[j].next = arr[i];
        j--;
    }
    arr[i].next = null;
};
// @lc code=end

