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
// var reorderList = function (head) {
//     if (head == null) return null;
//     let arr = [] , dummy = head;
//     while (dummy !== null) {
//         arr.push(dummy);
//         dummy = dummy.next;
//     }
    
//     let i = 0, j = arr.length - 1;
//     while (i < j) {
//         arr[i].next = arr[j];
//         i++;
//         if (i == j) {
//             break;
//         }
//         arr[j].next = arr[i];
//         j--;
//     }
//     arr[i].next = null;
// };
// 解法二 
// 1. 找到中间节点
// 2. 旋转中间节点后半段链表
// 3. 合并链表

var reorderList = function (head) {
    if (head == null) return null; 
    let mid = findMiddleNode(head);
    let l1 = head, l2 = mid.next;
    // 截断l1
    mid.next = null;
    let reverse = reverseList(l2);
    mergeList(l1, reverse);
}

/**
 * 快慢指针找到中间节点
 * @param {*} node 
 */
let findMiddleNode = (node) => {
    let slow = node, fast = node;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
/**
 * 反转链表
 * @param {*} node 
 */
// 1 -> 2 -> 3 -> 4 -> 5 
// 1 <- 2 <- 3 <- 4 <- 5
// null <- 1
let reverseList = (node) => {
    let prev = null, cur = node;
    while (cur !== null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}

let mergeList = (l1, l2) => {
    let l1_temp = l1, l2_temp = l2;
    while (l1_temp !== null && l2_temp !== null) {
        l1_temp = l1.next;
        l2_temp = l2.next;

        l1.next = l2;
        l1 = l1_temp;
        l2.next = l1;
        l2 = l2_temp;
    }
}
// @lc code=end

