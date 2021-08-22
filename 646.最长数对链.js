/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if (pairs.length == 0) return 0;
    pairs = pairs.sort((a, b) => a[1] - b[1]);

    let res = 1;
    let right = pairs[0][1];
    for (let i = 1; i < pairs.length; i++) {
        if (pairs[i][0] > right) {
            res++;
            right = pairs[i][1];
        }
    }
    return res;
};
// @lc code=end

