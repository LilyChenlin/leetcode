/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    let end = 0;
    for (let i = 0; i <= end; i++) {
        end = Math.max(end, nums[i] + i);
        if (end >= nums.length - 1) {
            return true;
        }
    }
    return false;
};
// @lc code=end

