/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [], solution = [];
    let backTrack = (targetT, begin) => {
        if (targetT <= 0) {
            if (targetT === 0) {
                res.push([...solution]);
            }
            return;
        } else {
            for (let i = begin; i < candidates.length; i++) {
                targetT = targetT - candidates[i];
                solution.push(candidates[i]);

                backTrack(targetT, i);

                let num = solution.pop();
                targetT = targetT + num;
            }
        }
    }

    backTrack(target, 0);
    return res;
};
// @lc code=end

