/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root == null) return null;
    // 如果找到了这个节点
    if (root.val == key) {
        // 分三种情况
        // 1. 这个节点没有左右节点，直接删除
        if (root.left == null && root.right == null) {
            return null;
        }
        // 2. 这个节点有左节点/右节点
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;

        // 3. 这个节点都有左右节点
        if (root.left !== null && root.right !== null) {
            // 获得右子树的最小值
            const minValNode = getMin(root.right);
            root.val = minValNode.val;
            root.right = deleteNode(root.right, minValNode.val);
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root;
};

var getMin = (root) => {
    // 二叉树右子树的最小树就是最左边的值
    while(root.left) root = root.left;
    return root;
}

// 如果删除的节点左右子树都有，那么需要获得右子树最小的节点替换这个删除的节点，才能保证二叉搜索树的特性。
// @lc code=end

