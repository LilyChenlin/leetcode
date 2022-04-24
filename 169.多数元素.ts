/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let candicate = null, count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candicate = nums[i];
        }
        count += nums[i] === candicate ? 1 : -1;
    }

    return candicate;
};
// @lc code=end

