/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = [], solution = [];

    let backTrack = (begin, last) => {
        if (begin === nums.length) {
            if (solution.length >= 2) {
                res.push([...solution]);
            }
            return;
        } 
        if (nums[begin] >= last) {
            solution.push(nums[begin]);
            backTrack(begin + 1, nums[begin]);
            solution.pop();
        }
        if (nums[begin] !== last) {
            backTrack(begin + 1, last)
        }
    }
    backTrack(0, -Infinity);
    return res;
};
// @lc code=end

