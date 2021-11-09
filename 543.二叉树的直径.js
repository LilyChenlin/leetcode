/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let ans = 1;
    
    let depth = (root) => {
        if (root == null) return 0;
        let L = depth(root.left);
        let R = depth(root.right);
        ans = Math.max(ans, L + R + 1);
        return Math.max(L, R) + 1;
    }
    depth(root);
    return ans - 1;

};
// @lc code=end

