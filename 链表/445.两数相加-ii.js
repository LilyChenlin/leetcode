/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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

//  长度过大
var addTwoNumbers = function(l1, l2) {
    // let num1Val = '', num2Val = '';
    // while (l1) {
    //     num1Val += l1.val;
    //     l1 = l1.next;
    // }
    // while (l2) {
    //     num2Val += l2.val;
    //     l2 = l2.next;
    // }
    // num1Val = Number(num1Val);
    // num2Val = Number(num2Val);
    // let sum = num1Val + num2Val;
    // sum = sum.toString();
    // let dummyHead = head = new ListNode(0);
    // for (let i = 0; i < sum.length; i++) {
    //     let node = new ListNode(sum[i]);
    //     dummyHead.next = node;
    //     dummyHead = dummyHead.next;
    // }
    // return head.next;
};

var addTwoNumbers = function (l1, l2) {
    let l1Arr = [], l2Arr = [];
    while (l1) {
        l1Arr.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        l2Arr.push(l2.val);
        l2 = l2.next;
    }
    let flag = 0;
    let dummyHead = null;
    while (l1Arr.length || l2Arr.length || flag !== 0) {
        const val1 = l1Arr.length ? l1Arr.pop() : 0;
        const val2 = l2Arr.length ? l2Arr.pop() : 0;
        let sum = val1 + val2 + flag;
        flag = Math.floor(sum / 10);
        sum = sum % 10;
        let node = new ListNode(sum);
        node.next = dummyHead;
        dummyHead = node
    }
    return dummyHead
}
// @lc code=end

