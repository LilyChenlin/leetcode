/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    console.log(intervals)
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        while (i < intervals.length - 1 && right >= intervals[i + 1][0]) {
            right = Math.max(right, intervals[i + 1][1]);
            i++;
        }
        res.push([left, right]);
    }
    return res;
};
// @lc code=end

