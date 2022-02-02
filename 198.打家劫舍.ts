/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    if (nums.length == 0) return 0;
    let dp = new Array(nums.length + 1).fill(0);
    dp[0] = 0;
    dp[1] = nums[0];
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[nums.length];
};
// @lc code=end

