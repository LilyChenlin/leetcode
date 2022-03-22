/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let ans = nums[0], total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (total < 0) {
            total = 0
        } 
        total = total + nums[i];
        ans = Math.max(ans, total);
    }
    return ans;
};
// @lc code=end

