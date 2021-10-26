/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const target = n * n;
    let num = 1;
    let l = 0, r = n - 1, t = 0, b = n - 1;
    while (num <= target) {
        for (let i = l; i <= r; i++) {
            result[t][i] = num++;
        }
        t++;
        for (let i = t; i <= b; i++) {
            result[i][r] = num++;
        }
        r--;
        for (let i = r; i >= l; i--) {
            result[b][i] = num++;
        }
        b--;
        for (let i = b; i >= t; i--) {
            result[i][l] = num++;
        }
        l++;
    }
    return result;
};

// @lc code=end

