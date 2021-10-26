/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var LArr = new Array(nums.length);
    var RArr = new Array(nums.length);
    var ansArr = new Array(nums.length);
    
    LArr[0] = 1;
    for (var i = 1; i < nums.length; i++) {
        LArr[i] = nums[i - 1] * LArr[i - 1];
    }

    RArr[nums.length - 1] = 1;
    for (var j = nums.length - 2; j >= 0; j--) {
        RArr[j] = nums[j + 1] * RArr[j + 1];
    }

    for (var i = 0; i < nums.length; i++) {
        ansArr[i] = LArr[i] * RArr[i];
    }
    return ansArr;
};
// @lc code=end

