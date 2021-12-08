/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [], solution = [];

    let backTrack = (temp, begin) => {
        if (solution.length === k) {
            if (temp === 0) {
                res.push([...solution]);
            }
            return;
        } else {
            for (let i = begin; i <= 9; i++) {
                solution.push(i);
                temp = temp - i;
                backTrack(temp, i + 1);
                let val = solution.pop();
                temp = temp + val;
            }
        }
    }

    backTrack(n, 1);
    return res;
};
// @lc code=end

