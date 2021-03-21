/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    var res = 0;
    for (let i = 0; i < timeSeries.length; i++) {
        if (i === timeSeries.length - 1) {
            res+=duration;
            break;
        } else if (timeSeries[i+1] > timeSeries[i] + duration) {
            res += duration;
        } else {
            res += timeSeries[i + 1] - timeSeries[i];
        }
    }
    return res;
};
// @lc code=end

