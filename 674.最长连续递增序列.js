/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let maxLen = 1;
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            count++;
            maxLen = Math.max(maxLen, count);
        } else {
            count = 1;
        }
    }
    return maxLen;
};
// @lc code=end

