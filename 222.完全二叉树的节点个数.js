/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function(root) {
    if (root == null) return 0;
    let level = 0;
    let node = root;
    while (node.left !== null) {
        level++;
        node = node.left;
    }

    let low = 1 << level, high = (1 << (level + 1)) - 1;
    while (low < high) {
        let mid = Math.floor((high - low + 1) / 2) + low;
        if (exits(root, level, mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;
};

var exits = (root, level, mid) => {
    let bits = 1 << (level - 1);
    let node = root;
    while (node !== null && bits > 0) {
        if (!(bits & mid)) {
            node = node.left;
        } else {
            node = node.right;
        }
        bits >>= 1
    }
    return node != null;
}
// @lc code=end

