/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     let res = [];

//     let loop = (root) => {
//         if (root == null) return;
//         res.push(root.val);
//         loop(root.left)
//         loop(root.right)
//     }
//     loop(root);
//     return res;
// };
var preorderTraversal = function (root) {
    let res = [];
    if (root == null) return res;

    let stack = [];
    let node = root;
    while (stack.length > 0 || node !== null) {
        while (node !== null) {
            res.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    return res;
};
// @lc code=end

