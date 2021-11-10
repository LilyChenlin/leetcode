/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function(root) {
    let ans = 0;

    let loop = (root) => {
        if (root == null) return 0;
        let left = loop(root.left);
        let right = loop(root.right);
        
        let leftArrow = 0, rightArrow = 0;
        if (root.left !== null && root.left.val == root.val) {
            leftArrow += left + 1;
        }
        if (root.right !== null && root.right.val == root.val) {
            rightArrow += right + 1;
        }
        ans = Math.max(ans, leftArrow + rightArrow);
        return Math.max(leftArrow, rightArrow);
    }
    loop(root);
    return ans;
};
// @lc code=end

