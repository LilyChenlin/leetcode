/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1);
    return recursionPathSum(root, prefixSumCount, targetSum, 0);
};

/**
 * 递归
 * @param {*} root 根节点
 * @param {*} prefixSumCount 前缀和
 * @param {*} targetSum 总和
 * @param {*} currSum 当前路径和
 */
var recursionPathSum = function (root, prefixSumCount, target, currSum) {
    if (root == null) return 0;

    let res = 0;
    currSum += root.val;

    res += prefixSumCount.has(currSum - target) ? prefixSumCount.get(currSum - target) : 0;
    prefixSumCount.set(currSum, prefixSumCount.get(currSum) + 1 || 1);

    res += recursionPathSum(root.left, prefixSumCount, target, currSum)
    res += recursionPathSum(root.right, prefixSumCount, target, currSum)

    prefixSumCount.set(currSum, prefixSumCount.get(currSum) - 1);
    return res;


}
// @lc code=end

