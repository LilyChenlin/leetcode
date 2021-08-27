/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let copyNums = nums.slice();
    // 升序
    copyNums = copyNums.sort((a, b) => a - b);
    let N = nums.length;
    for (let i = 1; i < nums.length; i += 2) {
        nums[i] = copyNums[--N];
    }
    for (let i = 0; i < nums.length; i += 2) {
        nums[i] = copyNums[--N];
    }
    return nums;
};
// @lc code=end

