/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [], solution = [];
    candidates.sort((a, b) => a - b)
    let backTrack = (n, begin) => {
        if (n <= 0) {
            if (n === 0) {
                res.push([...solution]);
            }
            return;
        } else {
            for (let i = begin; i < candidates.length; i++) {
                if (i > begin && candidates[i] == candidates[i - 1]) continue;
                n = n - candidates[i];
                solution.push(candidates[i]);
                backTrack(n, i + 1);
                let val = solution.pop();
                n = n + val;
            }
        }
    }
    backTrack(target, 0);
    return res;
};
// @lc code=end

