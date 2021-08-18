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
    let left = newInterval[0];
    let right = newInterval[1];
    let ans = [];
    let placed = false;
    for (let i = 0; i < intervals.length; i++) {
        // 在插入区间的右侧 并且没有交集
        if (intervals[i][0] > right) {
            if (!placed) {
                ans.push([left, right])
                placed = true;
            }
            ans.push(intervals[i]);
        } else if (intervals[i][1] < left) {
            ans.push(intervals[i]);
        } else {
            left = Math.min(left, intervals[i][0]);
            right = Math.max(right, intervals[i][1]);
        }
    }
    if (!placed) {
        ans.push([left, right]);
    }
    return ans;
};
// @lc code=end

