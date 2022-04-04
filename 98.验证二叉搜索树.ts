/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
    let prev = -Infinity;

    let loop = (root: TreeNode) => {
        if (root === null) return true;
        if (!loop(root.left)) {
            return false;
        }
        if (prev >= root.val) {
            return false;
        }
        prev = root.val;
        return loop(root.right)
    }

    return loop(root);
};
// @lc code=end

