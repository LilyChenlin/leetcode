/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


 // BFS
function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return [];
    let stack = [], res = []
    stack.push(root);
    while (stack.length !== 0) {
        let len = stack.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = stack.shift();
            level.push(node.val);

            if (node.left !== null) {
                stack.push(node.left);
            }

            if (node.right !== null) {
                stack.push(node.right);
            }


        }
        res.push(level);
    }
    return res;
};
// @lc code=end

