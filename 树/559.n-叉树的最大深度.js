/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    let stack = [];
    if (root !== null) {
        stack.push(root);
    }
    let res = 0;
    while (stack.length > 0) {
        let len = stack.length;
        for (let i = 0; i < len; i++) {
            const node = stack.shift();
            for (let i = 0; i < node.children.length; i++) {
                stack.push(node.children[i]);
            }
        }
        res++;
    }

    return res;
};
// @lc code=end

