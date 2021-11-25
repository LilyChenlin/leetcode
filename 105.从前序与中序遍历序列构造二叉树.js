/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    return buildNode(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

let buildNode = (preorder, preStart, preEnd, inorder, inStart, inEnd) => {

    if (preStart > preEnd) return null;

    // 确定根节点
    let root = preorder[preStart];
    let rootInOrderInx = inorder.indexOf(root);
    let leftLen = rootInOrderInx - inStart;
    let node = new TreeNode(root);
    node.left = buildNode(preorder, preStart + 1, preStart + leftLen, inorder, inStart, rootInOrderInx - 1);
    node.right = buildNode(preorder, preStart + leftLen + 1, preEnd, inorder, rootInOrderInx + 1, inEnd);

    return node;
    
}
// @lc code=end

