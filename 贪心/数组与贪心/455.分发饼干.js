/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let count = 0;
    let gLen = g.length, sLen = s.length;
    for (let i = 0, j = 0; i < gLen && j < sLen; i++, j++) {
        while (j < sLen && s[j] < g[i]) {
            j++;
        }
        if (j < sLen) {
            count++;
        }
    }
    return count;
};
// @lc code=end

