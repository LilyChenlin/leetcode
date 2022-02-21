/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
    let n = matrix.length;

    for (let i = n - 2; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            let temp = matrix[i + 1][j];
            if (j == 0) {
                temp = Math.min(temp, matrix[i + 1][j + 1])
            } else if (j == n - 1) {
                temp = Math.min(temp, matrix[i + 1][j - 1])
            } else {
                temp = Math.min(Math.min(temp,matrix[i + 1][j + 1]),matrix[i + 1][j - 1]);
            }

            matrix[i][j] += temp 
        }
    }
    let res = matrix[0][0];
    for (let i = 0; i < n; i++) {
        res = Math.min(res, matrix[0][i])
    }
    return res;
};
// @lc code=end

