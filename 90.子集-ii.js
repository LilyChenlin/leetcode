/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [], solution = [], visitedIndex = [];
    nums.sort((a, b) => a - b)
    let backTrack = (begin) => {
        if (begin > nums.length) {
            return;
        }
        res.push([...solution]);

        for (let i = begin; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !visitedIndex[i - 1]) {
                continue;
            }
            solution.push(nums[i])
            visitedIndex[i] = true;
            backTrack(i + 1);
            solution.pop();
            visitedIndex[i] = false;
        }
    }

    backTrack(0);
    return res;
};
// @lc code=end

