/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let minValue = prices[0], maxValue = -Infinity, ans = 0;
    for (let i = 1; i < prices.length; i++) {
        maxValue = Math.max(maxValue, prices[i]);
        if (minValue > prices[i]) {
            maxValue = prices[i]
            minValue = prices[i]
        }
        ans = Math.max(ans, maxValue - minValue);
    }
    return ans;
};
// @lc code=end

