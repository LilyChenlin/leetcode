/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(node) {
    const map = new Map();
    let res = [];

    let build = (node) => {
        if (!node) return '#';

        let left = build(node.left);
        let right = build(node.right);

        let String = left + ',' + right + ',' + node.val;
        map.set(String, map.get(String) + 1 || 1);
        if (map.get(String) === 2) {
            res.push(node);
        }
        return String;

    }
    build(node);
    return res;
};
// @lc code=end

