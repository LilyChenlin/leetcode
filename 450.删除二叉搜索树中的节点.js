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
    if (root === null) return null;
    if (root.val === key) {
        // 考虑三种情况
        // 1. 没有左右子树 直接删除
        if (root.left == null && root.right == null) return null;
        // 2. 有左右子树中一个
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        // 3. 左右子树皆有
        let node = getMin(root.right);
        root.val = node.val;
        root.right = deleteNode(root.right, node.val);
    } else if (root.val > key) {// 直接遍历root左边的子树
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root;
};

let getMin = (node) => {
    while (node.left) node = node.left;
    return node;
}

// 如果删除的节点左右子树都有，那么需要获得右子树最小的节点替换这个删除的节点，才能保证二叉搜索树的特性。
// @lc code=end

