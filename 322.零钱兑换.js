/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 创建一个amount+1长度的数组
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if(i - coin < 0) continue; // 无解
            dp[i] = Math.min(dp[i], 1 + dp[i - coin])
        }
    }
    return (dp[amount] === Infinity) ? -1 : dp[amount]
};
// @lc code=end

