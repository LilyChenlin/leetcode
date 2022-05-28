/*
 * @lc app=leetcode.cn id=1026 lang=typescript
 *
 * [1026] 节点与其祖先之间的最大差值
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

function maxAncestorDiff(root: TreeNode | null): number {
    let ans = 0;

    let loop = (root, max, min) => {
        if (root == null) return 0;
        ans = Math.max(Math.max(Math.abs(root.val - max), Math.abs(root.val - min), ans));
        max = Math.max(root.val, max);
        min = Math.min(root.val, min)
        loop(root.left, max, min);
        loop(root.right, max, min);
    }
    loop(root, root.val, root.val);
    return ans;
};
// @lc code=end

