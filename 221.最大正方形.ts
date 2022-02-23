/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
function maximalSquare(matrix: string[][]): number {
    let m = matrix.length, n = matrix[0].length;
    if (matrix == null || m < 1 || n < 1) return 0;
    let maxSide = 0;
    let dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++){
            if (matrix[i][j] === "1") {
                dp[i + 1][j + 1] = Math.min(Math.min(dp[i][j + 1], dp[i][j]), dp[i + 1][j]) + 1;
                maxSide = Math.max(maxSide, dp[i + 1][j + 1])
            }
        }
    }
    return maxSide * maxSide;
};
// @lc code=end

