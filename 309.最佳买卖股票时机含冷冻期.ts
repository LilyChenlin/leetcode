/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let len = prices.length;
    let dp = Array.from(new Array(len), () => new Array(4).fill(0));
    
    // dp[0][0]  持有股票的最大收益数
    // dp[i][1]  持有现金且处于冷冻期
    // dp[i][2]  持有现金但不处于冷冻期

    dp[0][0] = -prices[0]; // 持有股票的最大收益数
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
        dp[i][1] = dp[i - 1][0] + prices[i]
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1]);
        
    }
    return Math.max(dp[len - 1][1], dp[len - 1][2])
};
// @lc code=end

