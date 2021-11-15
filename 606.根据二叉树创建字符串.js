/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function (root) {
    if (root == null) return '';
    let stack = [root];
    let res = '';
    let visited = new Set();
    while (stack.length > 0) {
        root = stack[stack.length -1];
        if (visited.has(root)) {
            stack.pop();
            res = res + ')';
        } else {
            visited.add(root);
            res = res + '(' + root.val;
            if (root.left == null && root.right !== null) {
                res = res + '()'
            } 
            if (root.right !== null) {
                stack.push(root.right)
            }
            if (root.left !== null) {
                stack.push(root.left);
            }
        }

    }
    return res.substring(1, res.length - 1);
    
};
// @lc code=end

