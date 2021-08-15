/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(item => String(item));
    nums.sort((a, b) => {
        let res1 = a + b;
        let res2 = b + a;
        return res2 - res1;
    })
    if (nums[0] === '0') return '0';
    return nums.join("")
};
// @lc code=end

