/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const cnt = new Map();
    for (const widths of wall) {
        const n = widths.length - 1;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += widths[i];
            cnt.set(sum, (cnt.get(sum) || 0)  + 1)
        }     
    }
    let maxcnt = 0;
    for (const [_, c] of cnt.entries()) {
        maxcnt = Math.max(maxcnt, c);
    }
    return wall.length - maxcnt;
};
// @lc code=end

