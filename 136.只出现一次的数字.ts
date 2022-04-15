/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i];
    }
    return ans;
};
// @lc code=end

