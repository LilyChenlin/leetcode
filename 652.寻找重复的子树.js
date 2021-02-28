/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    // 用来记录遍历过的子树
    const count = new Map();
    const res = []; // 返回最后的结果

    // 使用后序遍历
    const collect = (node) => {
        if (!node) {
            return '#';
        } 
        const left = collect(node.left);
        const right = collect(node.right);
        const key = node.val + ',' + left + ',' + right;
        if (count.has(key)) {
            count.set(key, count.get(key) + 1)
        } else {
            count.set(key, 1)
        }
        if (count.get(key) === 2) {
            res.push(node);
        }
        return key;
    }
    collect(root);

    return res;
};
// @lc code=end

