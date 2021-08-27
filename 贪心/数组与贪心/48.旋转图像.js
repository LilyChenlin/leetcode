/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 解法一
// var rotate = function(matrix) {
//     const n = matrix.length;
//     const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrix_new[j][n - i - 1] = matrix[i][j];
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             matrix[i][j] = matrix_new[i][j];
//         }
//     }
// };

// 解法二
var rotate = function (matrix) {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }

    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}
// @lc code=end

