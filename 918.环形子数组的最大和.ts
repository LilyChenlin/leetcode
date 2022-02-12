/*
 * @lc app=leetcode.cn id=918 lang=typescript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
function maxSubarraySumCircular(nums: number[]): number {
    let
        total = 0, // 数组总和
        maxNum = nums[0], // 数组最大和
        minNum = nums[0],
        curMax = 0,
        curMin = 0;
    
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        curMax = Math.max(curMax + nums[i], nums[i]);
        maxNum = Math.max(maxNum, curMax);
        curMin = Math.min(curMin + nums[i], nums[i]);
        minNum = Math.min(curMin, minNum);
    }

    return maxNum > 0 ? Math.max(maxNum, total - minNum) : maxNum
};
// @lc code=end

