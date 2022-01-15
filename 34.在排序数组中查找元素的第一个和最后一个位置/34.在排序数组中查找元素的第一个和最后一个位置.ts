/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    let ans = [-1, -1];

    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false) - 1;

    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        return [leftIndex, rightIndex];
    }
    return ans;
};

function binarySearch(nums: number[], target: number, lower: Boolean): number {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if ((lower && nums[mid] >= target) || nums[mid] > target) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}
// @lc code=end

