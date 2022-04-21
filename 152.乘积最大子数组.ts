/*
 * @lc app=leetcode.cn id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
function maxProduct(nums: number[]): number {
    let ans = -Infinity, minTotal = 1, maxTotal = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            [maxTotal, minTotal] = [minTotal, maxTotal];
        }

        minTotal = Math.min(nums[i], nums[i] * minTotal);
        maxTotal = Math.max(nums[i], nums[i] * maxTotal);

        ans = Math.max(ans, maxTotal);
    }
    return ans;
};
// @lc code=end

