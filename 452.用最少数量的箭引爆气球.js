/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (points.length == 0) return 0;

    // 升序
    points = points.sort((a, b) => a[1] - b[1]);

    let right = points[0][1];
    let ans = 1;
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > right) {
            ans++;
            right = points[i][1];
        }
    }
    return ans;
};
// @lc code=end

