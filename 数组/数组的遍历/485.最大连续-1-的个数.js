/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var len = 0;
    var max = len;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            len++;
        } else {
            len = 0;
        }
        max = Math.max(len, max);
    }

    return max;
};
// @lc code=end

