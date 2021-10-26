/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
    let hl = 0, hr = 0;
    let leftR = root, rightR = root;
    while (leftR !== null) {
        hl++;
        leftR = leftR.left;
    }

    while (rightR !== null) {
        hr++;
        rightR = rightR.right;
    }
    if (hl == hr) {
        return Math.pow(2, hl) - 1
    }
    return 1 + countNodes(root.left) + countNodes(root.right)


};
// @lc code=end

