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

// 倒序遍历
// [1, 2, 3, 4] duration: 2
// [1, 4] duration: 2
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length == 0) return 0;
    var res = duration;
    for (var i = timeSeries.length - 2; i>=0; i--) {
        if (timeSeries[i] + duration > timeSeries[i + 1]) {
            res += (timeSeries[i + 1] - timeSeries[i])
        } else {
            res += duration;
        }
    }
    return res;
};

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

