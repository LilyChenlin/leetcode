/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let m = M;
    let col = M[0].length;
    let row = M.length;
    let result = [];
    for(let i = 0; i < row; i++) {
        result[i] = [];
        for (let j = 0; j < col; j++) {
            let sum = 0, count = 0;
            for (let irow = i - 1; irow <= i + 1; irow++) {
                if (irow < 0 || irow >= row) continue
                for (let jcol = j - 1; jcol <= j + 1; jcol++) {
                    if (jcol < 0 || jcol >= col) continue
                    sum += m[irow][jcol];
                    count++;
                }
            }
            result[i][j] = Math.floor(sum / count)
        }

    }
    return result;
};
// @lc code=end

