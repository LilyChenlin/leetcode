/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minVal = +Infinity;
    let pre = -1;
    let loop = (node) => {
        if (node == null) return;
        loop(node.left);
        if (pre == -1) {
            pre = node.val;
        } else {
            minVal = Math.min(node.val - pre, minVal);
            pre = node.val;
        }
        loop(node.right);
    }
    loop(root);
    return minVal;
};
// @lc code=end

