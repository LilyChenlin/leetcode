/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const n  = matrix.length;
    const m = matrix[0].length;
    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!matrix[i][j]) {
                row[i] = col[j] = true;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }

};
// @lc code=end

