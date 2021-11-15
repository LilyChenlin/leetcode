/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];

    let loop = (root) => {
        if (root == null) return null;

        res.push(root.val);

        for (let i = 0; i < root.children.length; i++) {
            loop(root.children[i])
        }
    }
    loop(root);
    return res;
};
// @lc code=end

