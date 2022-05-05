/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length, n = matrix[0].length;
    if (m == 0 || n == 0) return false;

    let i = 0, j = n - 1;
    while (i < m && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] >= target) {
            j--;
        } else {
            i++;
        }
    }
    return false;
};
// @lc code=end

