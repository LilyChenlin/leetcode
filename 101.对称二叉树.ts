/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
    return boolTree(root, root);
};

function boolTree(left: TreeNode | null, right: TreeNode | null): boolean {
    let queue = [];
    queue.push(left);
    queue.push(right);
    while (queue.length !== 0) {
        left = queue.shift();
        right = queue.shift();
        
        if (!left && !right) continue;
        if ((!left || !right) || (left.val !== right.val)) return false;
        
        queue.push(left.left);
        queue.push(right.right);

        queue.push(left.right);
        queue.push(right.left);
    }
}
// @lc code=end

