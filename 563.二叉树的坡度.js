/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
    let res = 0;

    let traverse = function (node) {
        if (node == null) return 0;
        let left = traverse(node.left);
        let right = traverse(node.right);

        res += Math.abs(left - right);
        return left + right + node.val;;
    }

    traverse(root, res);
    return res;
};

// @lc code=end

