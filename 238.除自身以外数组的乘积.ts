/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    let len = nums.length, res = new Array(len).fill(0), k = 1;

    for (let i = 0; i < len; i++) {
        res[i] = k;
        k = k * nums[i];
    }

    k = 1;
    for (let i = len - 1; i >= 0; i--) {
        res[i] = k * res[i];
        k = k * nums[i];
    }

    return res;
};
// @lc code=end

