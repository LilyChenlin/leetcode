/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
    let slow = nums[0], fast = nums[nums[0]];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    let pre = 0;
    while (pre !== slow) {
        pre = nums[pre];
        slow = nums[slow];
    }

    return pre;
};
// @lc code=end

