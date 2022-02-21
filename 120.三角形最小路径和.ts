/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
    let len = triangle.length;
    let prevLen = triangle[len - 1].length;
    for (let i = len - 2; i >= 0; i--) {
        for (let j = 0; j < prevLen; j++) {
            let temp = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
            triangle[i][j]+=temp;
        }
    }
    return triangle[0][0]
};
// @lc code=end

