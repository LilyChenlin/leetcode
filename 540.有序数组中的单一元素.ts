/*
 * @lc app=leetcode.cn id=540 lang=typescript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
function singleNonDuplicate(nums: number[]): number {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid % 2 !== 0) mid--;
        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }
    return nums[left];
};
// @lc code=end

