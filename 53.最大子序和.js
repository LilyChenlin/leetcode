/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let total = 0; // 前缀和
    for (let i = 0; i < nums.length; i++) {
        if (total > 0) {
            total += nums[i]
        } else {
            total = nums[i];
        }
        ans = Math.max(ans, total);
    }
    return ans;
};
// @lc code=end

