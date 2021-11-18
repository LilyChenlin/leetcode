/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (root == null) return [];
    let stack = [];
    let res = [];
    stack.push(root)
    while (stack.length > 0) {
        let node = stack.pop();
        res.push(node.val);
        if (node.children) {
            stack.push(...node.children)
        }
    } 
    return res.reverse();
};
// @lc code=end

