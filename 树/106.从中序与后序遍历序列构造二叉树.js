/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (70.74%)
 * Likes:    422
 * Dislikes: 0
 * Total Accepted:    81.9K
 * Total Submissions: 115.5K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 中序遍历 inorder = [9,3,15,20,7]
 * 后序遍历 postorder = [9,15,7,20,3]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
var buildTree = function(inorder, postorder) {
    return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};  

var build = function (inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inStart > inEnd) return null;
    
    let midVal = postorder[postEnd];
    let midIndex = inorder.indexOf(midVal);

    let root = new TreeNode(midVal);
    let leftLen = midIndex - inStart;
    root.left = build(inorder, inStart, midIndex - 1, postorder, postStart, postStart + leftLen - 1);
    root.right = build(inorder, midIndex + 1, inEnd, postorder, postStart + leftLen, postEnd - 1);
    return root;
}
// @lc code=end

