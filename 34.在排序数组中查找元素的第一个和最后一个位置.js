/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 即找出左边界和右边界值
var searchRange = function(nums, target) {
    let res = [-1, -1];
    const leftIndex = binarySearch(nums, target, true);
    const rightIndex = binarySearch(nums, target, false) - 1;// 寻找右边界是寻找第一个大于target的数， 因此右边界需要将这个index-1
    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        res = [leftIndex, rightIndex];
    }
    return res;
}; 

// 通过lower判断是左边届还是右边界 lower -> 左边界  大与等于即可
var binarySearch = function(nums, target, lower) {
    // right -> 左边界
    // ans -> 有边界
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        if (nums[mid] > target || (nums[mid] >= target && lower)) {
            right = mid - 1;
            ans = mid; 
        } else {
            left = mid + 1;
        }
    }
    return ans;
}
// @lc code=end

