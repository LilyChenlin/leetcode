/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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

var isValidBST = function(root) {
   return booleanBST(root, null, null)
};
var booleanBST = (root, min, max) => {
    if (root == null) return true;
    if (min !== null && min.val >= root.val) return false;
    if (max !== null && max.val <= root.val) return false;
    return booleanBST(root.left, min, root) && booleanBST(root.right, root, max);
}
// @lc code=end

