/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// 解法一
var matrixReshape = function(nums, r, c) {
    let row = nums.length, col = nums[0].length;
    const rowCol = row * col;
    const rc = r * c;
    if (rowCol < rc) { return nums}
    let result = new Array(r).fill(0).map(() => new Array(c).fill(0));
    let mrow = 0, ncol = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            result[i][j] = nums[mrow][ncol++];
            if (ncol == col) {
                ncol = 0;
                mrow++;
            }
        }
    }

    return result;
};
// 解法二：二维数组的一维表示
// @lc code=end

