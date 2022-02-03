/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
    let len = nums.length;
    if (len == 0) return 0;
    if (len == 1) return nums[0];

    let max1 = rob1(nums, 0, len - 1);
    let max2 = rob1(nums, 1, len);
    return Math.max(max1, max2);

};

function rob1(nums: number[], start: number, end: number) {
    let prev = 0, cur = 0;
    for (let i = start; i < end; i++) {
        let temp = cur;
        cur = Math.max(prev + nums[i], cur);
        prev = temp;
    }
    return cur;
}
// @lc code=end

