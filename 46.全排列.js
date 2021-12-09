/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [], solution = [];

    let visited = [];
    let backTrack = () => {
        if (solution.length == nums.length) {
            res.push([...solution]);
            return;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (!visited[nums[i]]) {
                    solution.push(nums[i]);
                    visited[nums[i]] = true;
                    backTrack();
                    solution.pop();
                    visited[nums[i]] = false;

                }

            }
        }
    }
    backTrack();

    return res;
};
// @lc code=end

