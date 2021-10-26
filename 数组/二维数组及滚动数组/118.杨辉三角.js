/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows == 0) return [];
    var result = [];
    for (var i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (var j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j]
        }
        result.push(row)
    }
    return result;
};
// @lc code=end

