/*
 * @lc app=leetcode.cn id=1051 lang=typescript
 *
 * [1051] 高度检查器
 */

// @lc code=start
function heightChecker(heights: number[]): number {
    let ans = 0, expect = [...heights];
    heights.sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (expect[i] !== heights[i]) ans++;
    }
    return ans;
};
// @lc code=end

