/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function(root) {
    let ansArr = [], // 记录众数数组
        maxCount = -Infinity,
        count = 0,
        base = 0;
    let updateNum = (val) => {
        if (val === base) {
            count++;
        } else {
            count = 1;
            base = val;
        }
        if (maxCount == count) {
            ansArr.push(val);
        }
        if (maxCount < count) {
            maxCount = count;
            ansArr = [val]
        }
    }
    let loop = (node) => {
        if (node == null) return null;
        loop(node.left);
        updateNum(node.val)
        loop(node.right);
    }
    loop(root);
    return ansArr;
};
// @lc code=end

