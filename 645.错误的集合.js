/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    nums = nums.sort((a, b) => { return a - b})
    var res = [];
    let missing = 1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            res.push(nums[i]);
        } else if (nums[i] + 1 < nums[i + 1]) {
            missing = nums[i] + 1;
        }
    }
    res.push(nums[nums.length - 1] !== nums.length ? nums.length : missing )
    return res;
};
// @lc code=end

