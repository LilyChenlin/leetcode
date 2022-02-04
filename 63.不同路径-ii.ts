/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) dp[i][0] = 1;
    for (let i = 0; i < n && obstacleGrid[0][i] == 0; i++)  dp[0][i] = 1;

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];  
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end

