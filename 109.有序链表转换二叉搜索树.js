/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let headArr = [];
    while (head) {
        headArr.push(head.val);
        head = head.next;
    }
    let loop = (left, right) => {
        if (left > right) return null;

        let mid = (right + left) >>> 1;
        let node = new TreeNode(headArr[mid]);
        node.left = loop(left, mid - 1);
        node.right = loop(mid + 1, right);

        return node;
    }
    return loop( 0, headArr.length - 1)
}; 


// @lc code=end

