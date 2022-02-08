/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let len = nums.length;
    let res = new Array(len);
    for (let i = 0, j = len - 1, pos = len - 1; i <= j;) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            res[pos] = nums[i] * nums[i];
            i++;
        } else {
            res[pos] = nums[j] * nums[j];
            j--;
        }
        pos--;
    }
    return res;
};
// @lc code=end

