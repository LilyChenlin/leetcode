/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
    let n = grid.length, m = grid[0].length;
    let dp = new Array(n).fill(0).map(item => new Array(m));

    dp[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }

    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    for(let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
        }
    }
    return dp[n - 1][m - 1]
};
// @lc code=end

