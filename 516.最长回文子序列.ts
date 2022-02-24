/*
 * @lc app=leetcode.cn id=516 lang=typescript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
function longestPalindromeSubseq(s: string): number {
    let len = s.length;
    let dp = new Array(len).fill(0).map(item => new Array(len).fill(0))
    for (let i = len - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[0][len - 1]
};
// @lc code=end

