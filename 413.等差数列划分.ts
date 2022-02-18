/*
 * @lc app=leetcode.cn id=413 lang=typescript
 *
 * [413] 等差数列划分
 */

// @lc code=start
function numberOfArithmeticSlices(nums: number[]): number {
    let len = nums.length;
    if (len < 3) return 0;
    let t = 0, ans = 0, d = nums[0] - nums[1];
    for (let i = 2; i < len; i++) {
        if (nums[i - 1] - nums[i] === d) {
            t++;
        } else {
            d = nums[i - 1] - nums[i];
            t = 0;
        }
        ans += t;
    }
    return ans;
};
// @lc code=end

