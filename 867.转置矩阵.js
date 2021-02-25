/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const n = matrix.length;// 行
    const m = matrix[0].length; // Lie
    // 构造二维数组，并填充0
    const transport = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            transport[j][i] = matrix[i][j]
        }
    }
    return transport
};
// @lc code=end

