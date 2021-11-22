/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let res = null;

    let build = (node) => {
        if (node == null) return null;
        if (node.val > val) {
            build(node.left)
        } else if (node.val < val) {
            build(node.right);
        } else {
            res = node;
        }
    }
    build(root);
    return res;
};
// @lc code=end

