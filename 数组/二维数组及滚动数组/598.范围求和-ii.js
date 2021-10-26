/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n;
    let[minM, minN] = ops[0];
    for (var i = 1; i < ops.length; i++) {
        minM = Math.min(minM, ops[i][0])
        minN = Math.min(minN, ops[i][1])
    }
    return minM * minN;
};
// @lc code=end

