/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix == null || matrix[0] == null) return null;
    // 遵循从左到右 从上到下 从右到左 从下到上的遍历过程
    const m = matrix.length, n = matrix[0].length;
    const target = m  * n;
    // 创建一个结果数组，长度为 m * n;
    let l = 0, r = n - 1, t = 0, b = m - 1;
    let num = 1;
    const result = new Array();
    while( num <= target) {
        // 从左到右
        for (let i = l; i <= r && num <= target; i++) {
            result.push(matrix[t][i]);
            num++;
        }
        t++;
        // 从上到下
        for (let i = t; i <= b && num <= target; i++) {
            result.push(matrix[i][r]);
            num++;
        }
        r--;
        // 从右到左
        for (let i = r; i >= l && num <= target; i--) {
            result.push(matrix[b][i])
            num++;
        }
        b--;
        
        // 从下到上
        for (let i = b; i >= t && num <= target; i--) {
            result.push(matrix[i][l]);
            num++;
        }
        l++;
    }
    return result;
};
// @lc code=end

