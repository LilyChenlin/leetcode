/*
 * @lc app=leetcode.cn id=81 lang=typescript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
    let len = nums.length;
    if (!len) return false;
    if (len == 1) return nums[0] == target;

    let left = 0, right = len - 1;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        if (target === nums[mid]) return true;
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[len - 1]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};
// @lc code=end

