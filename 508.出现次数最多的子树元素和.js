/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    let sumCount = new Map();
    let maxFrequent = -Infinity;
    let res = [];
    countTheMax(root);

    for (let [key, value] of sumCount.entries()) {
        if (value == maxFrequent) {
            res.push(key)
        }
    }
    // 计算该节点的子元素和
    function countTheMax(head) {
        // base base
        if (head == null) return null;

        let left = countTheMax(head.left);
        let right = countTheMax(head.right);

        let sum = left + right + head.val;

        sumCount.set(sum, sumCount.get(sum) + 1 || 1);
        maxFrequent = Math.max(maxFrequent, sumCount.get(sum));

        return sum;
    }
    return res;
};
// @lc code=end

