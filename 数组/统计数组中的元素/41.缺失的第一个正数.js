/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var n = nums.length;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1
        }
    }

    for (var i = 0; i < nums.length; i++) {
        var num = Math.abs(nums[i]);
        if (num <= n ) {
            nums[num - 1] = - Math.abs(nums[num - 1]);
        }
    }
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
};
// @lc code=end

