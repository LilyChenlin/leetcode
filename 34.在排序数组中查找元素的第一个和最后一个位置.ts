/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) return [-1, -1];
    let ans = [-1, -1];
    let left = 0, right = nums.length - 1;
    // 寻找 >= target的最左边界值 [left, mid - 1] [mid, right]
    // 查找元素的开始位置
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    if (nums[right] !== target) return [-1, -1];

    const L = left;
    // 查找元素的结束位置
    left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        if (nums[mid] <= target) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return [L, right]
};

// @lc code=end

