/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= coins.length; i++) {
        let val = coins[i - 1];
        for (let j = val; j <= amount; j++) {
            dp[j] += dp[j - val];
        }
    }
    return dp[amount]
};
// @lc code=end

