/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @description 递归实现对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
// var check = (p, q) => {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     return p.val == q.val && check(p.left, q.right) && check(q.left, p.right);
// }
// var isSymmetric = function (root) {
//     return check(root, root);
// };

/**
 * @description 迭代实现对称二叉树
 */
var check = (p, q) => {
    let queue = [];
    queue.push(p);
    queue.push(q);
    while (queue.length) {
        p = queue.shift();
        q = queue.shift();
        if (!p && !q) continue;
        if ((!p || !q) || (p.val !== q.val)) return false;

        queue.push(p.left);
        queue.push(q.right);

        queue.push(p.right);
        queue.push(q.left);
    }
    return true;
}
var isSymmetric = function (root) {
    return check(root, root);
}
// @lc code=end

