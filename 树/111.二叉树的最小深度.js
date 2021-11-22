/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

// BFS 解法
var minDepth = function(root) {
    // 如果是空节点，深度为0
    if (root == null) return 0;
    let arr = [];
    arr.push(root);
    let depth = 1; // 默认高度1

    while(arr.length) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            const cur = arr.shift();
            if (cur.left == null && cur.right == null) {
                return depth
            }
            if (cur.left !== null) {
                arr.push(cur.left)
            }
            if (cur.right !== null) {
                arr.push(cur.right)
            }
        }
        depth++
    }
    return depth;
};
// @lc code=end

