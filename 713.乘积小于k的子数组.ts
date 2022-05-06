/*
 * @lc app=leetcode.cn id=713 lang=typescript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let left = 0, right = 0, ans = 0, len = nums.length, total = 1;
    while (left < len) {
        total *= nums[right];
        if (total < k) {
            ans++;
            right++;
        } else {
            left++;
            right = left;
            total = 1;
        }
    }
    return ans;
};
// @lc code=end

