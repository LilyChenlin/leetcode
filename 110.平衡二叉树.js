/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {

    let loop = (node) => {
        if (node == null) return 0;
        let leftH = loop(node.left);
        if (leftH == -1) return -1;
        let rightH = loop(node.right);
        if (rightH == -1) return -1;
        return Math.abs(leftH - rightH) < 2 ? Math.max(leftH, rightH) + 1 : -1;

    }
    return loop(root) !== -1;
};
// @lc code=end

