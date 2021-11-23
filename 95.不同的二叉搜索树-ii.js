/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let ans = [];
    if (n == 0) return ans;
    return getAns(1, n);
};
let getAns = (start, end) => {
    let res = [];
    if (start > end) { res.push(null); return res };
    for (let i = start; i <= end; i++) {
        let leftTree = getAns(start, i - 1);
        let rightTree = getAns(i + 1, end);
        for (let left of leftTree) {
            for (let right of rightTree) {
                let node = new TreeNode(i);
                node.left = left;
                node.right = right;
                res.push(node)
            }
        }
    }
    return res
}
// @lc code=end

