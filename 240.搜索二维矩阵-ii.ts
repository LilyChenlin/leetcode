/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    let x = 0, y = matrix[0].length - 1;

    while (x < matrix.length && y >= 0) {
        if (matrix[x][y] == target) {
            return true;
        } else if (matrix[x][y] > target) {
            y--;
        } else {
            x++;
        }
    }
    return false;
};
// @lc code=end

