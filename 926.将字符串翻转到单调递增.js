/*
 * @lc app=leetcode.cn id=926 lang=typescript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let len = s.length;
    let dp = Array.from({ length: len + 1 }, () => new Array(2));

    dp[0][0] = 0;
    dp[0][1] = 0;
    for (let i = 0; i < len; i++) {
        dp[i + 1][0] = dp[i][0] + (s[i] === '1' ? 1 : 0);
        dp[i + 1][1] = Math.min(dp[i][0], dp[i][1]) + (s[i] === '0' ? 1 : 0);
    }
    return Math.min(dp[len][0], dp[len][1]);
};
// @lc code=end

