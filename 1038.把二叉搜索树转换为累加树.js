/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 把二叉搜索树转换为累加树
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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let num = 0;

    const loopTree = (root) => {
        if (root == null) return;

        loopTree(root.right);
        num += root.val;
        root.val = num;
        loopTree(root.left);
    }
    loopTree(root);
    return root;
};
// @lc code=end

