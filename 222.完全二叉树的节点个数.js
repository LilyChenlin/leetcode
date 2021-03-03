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
    let lRoot = root, rRoot = root;
    while(lRoot !== null) {
        lRoot = lRoot.left;
        hl++;
    }
    while(rRoot !== null) {
        rRoot = rRoot.right;
        hr++
    }

    // 如果左右子树相同，则是一棵满二叉树
    if (hl === hr) {
        return Math.pow(2, hl) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end

