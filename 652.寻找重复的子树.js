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
    const count = new Map();
    const res = [];

    let build = (root) => {
        if (!root) {
            return '#';
        }
        let left = build(root.left);
        let right = build(root.right);
        let String = left + ',' + right + ',' + root.val;

        count.set(String, count.get(String) + 1 || 1);
        if (count.get(String) === 2) {
            res.push(root);
        }
        return String;
    }
    build(node);
    return res;
};
// @lc code=end

