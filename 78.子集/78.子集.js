/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [], solution = [];
    let backTrack = (begin) => {
        if (begin > nums.length) {
            return;
        }
        res.push([...solution]);

        for (let i = begin; i < nums.length; i++) {
            solution.push(nums[i]);
            backTrack(i + 1);
            solution.pop();
        }
    }

    backTrack(0);
    return res;
};
// @lc code=end

