/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let solution = [], res = [];
    let visit = [];
    let backTrack = (begin) => {
        if (nums.length === solution.length) {
            res.push([...solution]);
            return;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if ((i > 0 && nums[i] === nums[i - 1] && !visit[i - 1]) || visit[i]) continue;
                solution.push(nums[i]);
                visit[i] = true;
                backTrack();
                solution.pop();
                visit[i] = false;


            }
        }
    }
    backTrack(0);
    return res;
};
// @lc code=end

