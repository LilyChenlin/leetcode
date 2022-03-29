/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const len = nums.length;
    if (len < 2) return;

    let zero = 0, two = len, i = 0;
    while (i < two) {
        if (nums[i] === 0) {
            swap(nums, i, zero);
            i++;
            zero++;
        } else if (nums[i] == 1) {
            i++;
        } else {
            two--;
            swap(nums, i, two);
        }
    }

};

function swap(nums: number[], i: number, zero: number): number[] {
    let temp = nums[i];
    nums[i] = nums[zero];
    nums[zero] = temp;
    return nums;
}
// @lc code=end

