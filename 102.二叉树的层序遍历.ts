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
    let 
        res = [], // 遍历结果
        queue = []; // 遍历队列
    
    queue.push(root);
    while (queue.length > 0) {
        let n = queue.length;
        let level = [];
        for (let i = 0; i < n; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        res.push(level);
    }
    return res;
};
// @lc code=end

