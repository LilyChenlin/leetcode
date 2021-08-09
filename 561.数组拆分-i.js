/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sum = 0;
    // 升序
    nums.sort((a, b) => {return a - b});
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i]
    }
    return sum;
};
// @lc code=end

