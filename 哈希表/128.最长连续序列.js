/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0;
    let uniqueNums = new Set(nums);
    nums = [...uniqueNums];
    nums = nums.sort((a, b) => {return a - b});
    let maxLen = -Infinity;
    let begin = nums[0];
    let cur = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == begin + 1) {
            cur++;
            begin = nums[i];
        } else {
            maxLen = Math.max(maxLen, cur);
            begin = nums[i];
            cur = 1;
        }
    }
    maxLen = Math.max(maxLen, cur);
    return maxLen;
};
// @lc code=end

