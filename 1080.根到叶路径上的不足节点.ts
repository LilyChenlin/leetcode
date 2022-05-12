/*
 * @lc app=leetcode.cn id=1080 lang=typescript
 *
 * [1080] 根到叶路径上的不足节点
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

function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
    if (root == null) return null;
    if (root.left == null && root.right == null) {
        if (root.val < limit) {
            return null;
        }
        return root;
    }

    root.left = sufficientSubset(root.left, limit - root.val);
    root.right = sufficientSubset(root.right, limit - root.val);

    if (root.left == null && root.right == null) {
        return null;
    }

    return root;

};
// @lc code=end

