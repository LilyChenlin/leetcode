/*
 * @lc app=leetcode.cn id=1037 lang=typescript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
function isBoomerang(points: number[][]): boolean {
    let point1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]];
    let point2 = [points[2][0] - points[1][0], points[2][1] - points[1][1]];

    return point1[0] * point2[1] - point1[1] * point2[0] !== 0;
};
// @lc code=end

