/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length == 0) return [];
    let res = [];
    let right = nums[0];
    let left = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            right = nums[i];
        } else {
            // 已经形成一个区间范围列表
            if (left == right) {
                res.push(left + "");
            } else {
                res.push(left + '->' + right);
            }
            left = nums[i];
            right = nums[i];

        }
    }
    if (left == right) {
        res.push(left + "");
    } else {
        res.push(left + '->' + right);
    }
    return res;
};
// @lc code=end

