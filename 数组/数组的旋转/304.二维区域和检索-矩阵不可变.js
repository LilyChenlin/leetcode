/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start

// 一维数组解法
/**
 * @param {number[][]} matrix
 */
// var NumMatrix = function(matrix) {
//     const n = matrix.length, m = matrix[0].length;
//     this.sums = new Array(n).fill(0).map(() => new Array(m).fill(0));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
//         }
//     }
// };

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
//     let sum = 0;
//     for (let i = row1; i <= row2; i++) {
//         sum += this.sums[i][col2 + 1] - this.sums[i][col1]
//     }
//     return sum;
// };

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */


// 1维数组解法

var NumMatrix = function(matrix) {
    // 前缀和
    let len = matrix.length;
    if (len > 0) {
        const m = matrix[0].length;
        this.sums = new Array(len).fill(0).map(() => new Array(m + 1).fill(0));
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < m; j++) {
                this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
            }
        }
    }
}   


NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i++) {
        sum += this.sums[i][col2 + 1] - this.sums[i][col1]
    }
    return sum;
};

// @lc code=end

