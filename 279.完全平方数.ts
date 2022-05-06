/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
function numSquares(n: number): number {
    let dp = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        dp[i] = i;
        for (let j = 0; i - j * j >= 0; j--) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    return dp[n];
};
// @lc code=end

