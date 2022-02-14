/*
 * @lc app=leetcode.cn id=1567 lang=typescript
 *
 * [1567] 乘积为正数的最长子数组长度
 */

// @lc code=start
function getMaxLen(nums: number[]): number {
    let len = nums.length;
    let positive = new Array(len).fill(0);// 乘积为正数的最长子数组长度
    let negative = new Array(len).fill(0);// 乘积为正数的最长子数组长度

    if (nums[0] > 0) {
        positive[0] = 1;
    } else if (nums[0] < 0) {
        negative[0] = 1;
    }

    let ans = positive[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] > 0) {
            positive[i] = positive[i - 1] + 1;
            negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
        } else if (nums[i] < 0) {
            positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
            negative[i] = positive[i - 1] + 1;
        } else {
            positive[i] = 0;
            negative[i] = 0;
        }
        ans = Math.max(ans, positive[i])
    }
    return ans;
};
// @lc code=end

