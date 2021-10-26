/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 重点在于定三个变量
var thirdMax = function(nums) {
    var a = Number.MIN_SAFE_INTEGER, 
        b = Number.MIN_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, minVal = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > a) {
            c = b;
            b = a;
            a = nums[i]
        } else if (nums[i] > b && nums[i] < a) {
            c = b;
            b = nums[i] 
        } else if (nums[i] > c && nums[i] < b) {
            c = nums[i]
        }
    }
    if (c > minVal) return c;
    return a;
};
// @lc code=end

