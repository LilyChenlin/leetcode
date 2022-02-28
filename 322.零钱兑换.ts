/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start

// dp
function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

// 回溯
// function coinChange(coins: number[], amount: number): number {
//     if (amount == 0) return 0;
//     coins.sort((a, b) => b - a);
//     let ans = +Infinity;

//     function coinChangeFunc(coins: number[], amount: number, count: number, count_index: number) {
//         if (amount == 0) {
//             ans = Math.min(count, ans);
//             return;
//         }
//         if (count_index == coins.length) return;
//         for (let k = Math.floor(amount / coins[count_index]); k >= 0 && k + count < ans; k--) {
//             coinChangeFunc(coins, amount - k * coins[count_index], count + k, count_index + 1);
//         }
//     }

//     coinChangeFunc(coins, amount, 0, 0);

//     return ans == +Infinity ? -1 : ans;
// };


// @lc code=end

