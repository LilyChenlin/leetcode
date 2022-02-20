/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    let row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 0; i < row.length; i++) {
        for (let j = i; j > 0; j--) {
            row[j] += row[j - 1];
        }
    }
    return row;
};
// @lc code=end

