/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    if (turnedOn < 0 || turnedOn > 8) return [];

    let res = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if ((h.toString(2).split('0').join('').length) + (m.toString(2).split('0').join('').length) === turnedOn) {
                res.push(h + ':' + (m < 10 ? '0' : '') +  m)
            }
        }
    }
    return res;
};
// @lc code=end

