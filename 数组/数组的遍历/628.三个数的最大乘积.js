/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumProduct = function(nums) {
    let a = Number.MIN_SAFE_INTEGER,
        b = Number.MIN_SAFE_INTEGER,
        c = Number.MIN_SAFE_INTEGER,
        d = Number.MAX_SAFE_INTEGER,
        e = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > a) {
            c = b;
            b = a;
            a = nums[i];
        } else if (nums[i] > b) {
            c = b;
            b = nums[i];
        } else if (nums[i] > c) {
            c = nums[i];
        }
        if (nums[i] < d) {
            e =  d;
            d = nums[i]
        } else if (nums[i] < e) {
            e = nums[i];
        }
        
    }
    return Math.max(a * b * c, a * d * e)
};
// @lc code=end

