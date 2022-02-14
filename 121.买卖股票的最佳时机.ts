/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let maxValue = -Infinity, minValue = prices[0];
    let ans = 0;
    for (let i = 0; i < prices.length; i++) {
        maxValue = Math.max(maxValue, prices[i]);
        if (prices[i] < minValue) {
            minValue = prices[i];
            maxValue = prices[i]
        }
        ans = Math.max(ans, maxValue - minValue);
    }
    return ans;
};
// @lc code=end

