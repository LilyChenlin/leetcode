/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    return dfs(root, subRoot);
};

var dfs = (t, s) => {
    if (t == null) return false;
    return checked(t, s) || dfs(t.left, s) || dfs(t.right, s);
}
var checked = (s, t) => {
    if (s == null && t == null) {
        return true;
    }
    if (s == null || t == null || s.val !== t.val) {
        return false;
    }
    return checked(s.left, t.left) && checked(s.right, t.right);
}

// @lc code=end

