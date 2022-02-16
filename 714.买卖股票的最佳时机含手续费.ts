/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
    let len = prices.length;
    let dp = Array.from(new Array(len), () => new Array(2).fill(0));
    
    // dp[i][0] 手上是现金 
    // dp[i][1] 手上是股票

    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[len - 1][0]
}
// @lc code=end

