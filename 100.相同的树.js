/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    let temp = [];
    temp.push(p);
    temp.push(q);
    while (temp.length > 0) {
        p = temp.shift();
        q = temp.shift();
        if (p == null && q == null) { continue };
        if ((p == null || q == null) || (p.val !== q.val)) { return false };
        temp.push(p.left);
        temp.push(q.left);

        temp.push(p.right);
        temp.push(q.right);
    }
    return true;
};
// @lc code=end

