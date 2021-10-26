/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var res = [];
    var n = nums.length;
    for (const [index, num] of nums.entries()) {
        var x = (num - 1) % n;
        if (nums[x] > nums.length) {
            res.push(x + 1);
        } 
        nums[x] += n;
    }
    return res;
};
// @lc code=end

