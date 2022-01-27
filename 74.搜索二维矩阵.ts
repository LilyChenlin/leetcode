/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix.length) return false;
    let x = matrix.length - 1, y = 0;
    while (x >= 0 && y < matrix[0].length) {
        if (matrix[x][y] === target) {
            return true
        } else if (matrix[x][y] > target) {
            x--;
        } else {
            y++;
        }
    }
    return false;
};
// @lc code=end

