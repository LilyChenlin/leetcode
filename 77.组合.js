/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const solution = [];
    let backTrack = (begin) => {
        if (solution.length === k) {
            res.push([...solution]);
            return;
        } else {
            for (let i = begin; i <= n; i++) {
                solution.push(i);
                backTrack(i + 1);
                solution.pop()
            }
        }
    }

    backTrack(1);
    return res;
};
// @lc code=end

