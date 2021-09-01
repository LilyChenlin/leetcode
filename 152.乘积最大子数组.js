/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxNum = -Infinity, len = nums.length;
    if (len == 1) return nums[0]
    for (let i = 0; i < len; i++) {
        let total = nums[i];
        maxNum = Math.max(total, maxNum)
        for (let j = i + 1; j < len; j++) {
            total = total * nums[j];
            maxNum = Math.max(total, maxNum);
        }
    }
    return maxNum
};
// @lc code=end

