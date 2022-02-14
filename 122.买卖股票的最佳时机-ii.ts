/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let len = prices.length;
    if (len < 2) return 0;
    let cash = 0, holder = -prices[0];
    let pre_cash = cash, pre_holder = holder;
    for (let i = 1; i < prices.length; i++) {
        cash = Math.max(pre_cash, pre_holder + prices[i]);
        holder = Math.max(pre_holder, pre_cash - prices[i]);

        pre_cash = cash;
        pre_holder = holder;
    }
    return cash;

};
// @lc code=end

