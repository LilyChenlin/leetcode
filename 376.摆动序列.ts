/*
 * @lc app=leetcode.cn id=376 lang=typescript
 *
 * [376] 摆动序列
 */

// @lc code=start
function wiggleMaxLength(nums: number[]): number {
    let len = nums.length;
    if (len < 2) return 1;
    let down = new Array(len).fill(1), up = new Array(len).fill(1);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        } else if (nums[i] < nums[i - 1]) {
            up[i] = up[i - 1];
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
        } else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }
    return Math.max(down[len - 1], up[len - 1])
};
// @lc code=end

