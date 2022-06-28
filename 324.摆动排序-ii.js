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
var wiggleSort = function (nums) {
    let tempNum = [...nums];
    tempNum.sort((a, b) => a - b);
    let N = nums.length;
    for (let i = 1; i < nums.length; i += 2) {
        nums[i] = tempNum[--N];
    }

    n = 0;
    for (let i = 0; i < nums.length; i += 2) {
        nums[i] = tempNum[--N]
    }

};
// @lc code=end

