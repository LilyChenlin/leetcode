/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    // const dp = new Array(n).fill(0).map(item => new Array(n).fill(0));
    // dp[0][0] = 0, dp[0][1] = -prices[0];
    // for (let i = 1; i < n; i++) {
    //     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    //     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    // }
    // return dp[n - 1][0];

    // 优化
    let dp0 = 0, dp1 = -prices[0];
    for (let i = 1; i < n; i++) {
        let newDp0 = Math.max(dp0, dp1 + prices[i]);
        let newDp1 = Math.max(dp1, dp0 - prices[i]);
        dp0 = newDp0;
        dp1 = newDp1
    }
    return dp0;
};
// @lc code=end

