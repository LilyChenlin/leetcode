/*
 * @lc app=leetcode.cn id=553 lang=javascript
 *
 * [553] 最优除法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    let len = nums.length;
    if (len == 1) return nums[0] + '';
    if (len == 2) return nums[0] + '/' + nums[1];
    let res = nums[0] + '/(' + nums[1];
    for (let i = 2; i < len; i++) {
        res += '/' + nums[i]
    }
    res = res + ')';
    return res;

};


// @lc code=end

