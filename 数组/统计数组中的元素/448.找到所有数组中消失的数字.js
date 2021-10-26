/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var res = [];
    var n = nums.length
    for (const num of nums) {
        var x = (num - 1) % n;
        nums[x] += n
    }
    for (const [index, num] of nums.entries()) {
        if (num <= n) {
            res.push(index + 1)
        }
    }
    return res;
};
// @lc code=end

