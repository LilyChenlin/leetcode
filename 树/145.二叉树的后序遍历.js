/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function(root) {
//     let res = [];
    
//     let build = (node) => {
//         if (node == null) return;
//         build(node.left)
//         build(node.right)
//         res.push(node.val)
//     }
//     build(root);
//     return res;
// };
let postorderTraversal = function (root) {
    if (root == null) return []
    let stack = [];
    let res = [];
    stack.push(root);
    while (stack.length > 0) {
        let node = stack.pop();
        res.push(node.val);
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }
    return res.reverse();
}
// @lc code=end

