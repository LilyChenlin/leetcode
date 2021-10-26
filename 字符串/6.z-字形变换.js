/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s;
    let res = '';
    let len = s.length;
    let cycleLen = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; i + j < len; j+=cycleLen) {
            res += s[i + j];
            if (i != 0 && i != numRows - 1 && j + cycleLen - i < len)
                res += s[j + cycleLen - i];
            }
    }
    return res;
};
// @lc code=end

