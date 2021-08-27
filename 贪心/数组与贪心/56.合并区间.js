/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    intervals = intervals.sort((a, b) =>  a[0] - b[0]);
    let i = 0;
    while (i < intervals.length) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        while (i < intervals.length - 1&& right >= intervals[i + 1][0]) {
            right = Math.max(right, intervals[i + 1][1]);
            i++;
        }
        res.push([left, right])
        i++;
    }
    return res;
};
// @lc code=end

