/*
 * @lc app=leetcode.cn id=730 lang=typescript
 *
 * [730] 统计不同回文子序列
 */

// @lc code=start
var countPalindromicSubsequences = function (s) {
    const [mod, n] = [1e9 + 7, s.length];
    const dp = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) dp[i][i] = 1;
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            let j = i + len - 1;
            if (s.charAt(i) === s.charAt(j)) {
                let left = i + 1, right = j - 1;
                while (left <= right && s.charAt(left) !== s.charAt(i)) left++;
                while (left <= right && s.charAt(right) !== s.charAt(j)) right--;
                if (left > right) {
                    // abcba
                    dp[i][j] = 2 * dp[i + 1][j - 1] + 2;
                } else if (left === right) {
                    // bbcba
                    dp[i][j] = 2 * dp[i + 1][j - 1] + 1;
                } else {
                    dp[i][j] = 2 * dp[i + 1][j - 1] - dp[left + 1][right - 1];
                }
            } else {// 不相等
                dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
            }
            dp[i][j] = (dp[i][j] + mod) % mod;
        }
    }
    return dp[0][n - 1];
};
// @lc code=end

