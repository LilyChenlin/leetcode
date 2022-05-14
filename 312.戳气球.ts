/*
 * @lc app=leetcode.cn id=312 lang=typescript
 *
 * [312] 戳气球
 */

// @lc code=start
function maxCoins(nums: number[]): number {
    let len = nums.length;
    let temp = new Array(len + 2);

    temp[0] = 1, temp[len + 1] = 1;
    for (let i = 0; i < len; i++) {
        temp[i + 1] = nums[i];
    }

    let dp = new Array(len + 2).fill(0).map(item => new Array(len + 2).fill(0));

    for (let length = 3; length <= len + 2; length++) {
        for (let i = 0; i <= len + 2 - length; i++) {
            let res = 0;
            for (let k = i + 1; k < i + length - 1; k++) {
                let left = dp[i][k];
                let right = dp[k][i + length - 1];
                res = Math.max(res, left + temp[i] * temp[k] * temp[i + length - 1] + right);
            }
            dp[i][i + length - 1] = res;
        }
    }

    return dp[0][len + 1];
};
// @lc code=end

