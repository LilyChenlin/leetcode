/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex == 0) return [1];
    var result = [];
    for (var i = 0; i < rowIndex + 1; i++) {
        const row = new Array(i + 1).fill(1);
        for (var j = 1; j < row.length - 1; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j]
        }
        result.push(row)
    }
    return result[rowIndex];
};
// @lc code=end

