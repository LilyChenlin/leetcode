/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function(root) {
    let valArr = new Set();
    let loop = (root) => {
        if (root == null) return null;
        valArr.add(root.val)
        loop(root.left);
        loop(root.right)
    }
    loop(root);
    
    valArr = [...valArr];
    valArr.sort((a, b) => a - b);
    
    if (valArr.length > 1) {
        return valArr[1];
    } else {
        return -1;
    }
};
// @lc code=end

