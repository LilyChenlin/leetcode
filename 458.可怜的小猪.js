/*
 * @lc app=leetcode.cn id=458 lang=javascript
 *
 * [458] 可怜的小猪
 */

// @lc code=start
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    const times = minutesToTest / minutesToDie;
    const base = times + 1;
    const temp = Math.log(buckets) / Math.log(base);
    const ans = Math.ceil(temp)
    return ans;
};
// @lc code=end

