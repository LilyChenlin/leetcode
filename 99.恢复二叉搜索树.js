/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    if (root == null) return;
    let stack = [], prev = 0, x = null, y = null;
    while (root !== null || stack.length !== 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (prev !== null && root.val < prev.val) {
            y = root;
            if (x === null) {
                x = prev;
            }
            else break;
        }
        prev = root;
        root = root.right;
    }
    swap(x, y);

};

let swap = (x, y) => {
    let temp = x.val;
    x.val = y.val;
    y.val = temp;
}
// @lc code=end

