/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    return buildNode(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function buildNode(preorder: number[], preStart: number, preEnd: number, inorder: number[], inStart: number, inEnd: number) {
    if (preStart > preEnd) {return null};
    let root = preorder[preStart];
    let inorderRootIdx = inorder.indexOf(root);
    let leftLen = inorderRootIdx - inStart;
    let node = new TreeNode(root);
    node.left = buildNode(preorder, preStart + 1, preStart + leftLen, inorder, inStart, inorderRootIdx - 1);
    node.right = buildNode(preorder, preStart + 1 + leftLen, preEnd, inorder, inorderRootIdx + 1, inEnd);
    return node;
}
// @lc code=end

