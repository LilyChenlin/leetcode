/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    let res = [];
    let len = nums.length;
    if (len < 3) return [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return res;
        if (nums[i] === nums[i - 1] && i > 0) continue;
        let L = i + 1, R = len - 1;
        while (L < R) {
            let total = nums[L] + nums[R] + nums[i];
            if (total == 0) {
                res.push([nums[L], nums[R], nums[i]]);
                while (L < R && nums[L] == nums[L + 1]) L++;
                while (L < R && nums[R] == nums[R - 1]) R--;
                L++;
                R--;
            } else if (total > 0) {
                R--;
            } else {
                L++;
            }
        }
    }
    return res;
};
// @lc code=end

