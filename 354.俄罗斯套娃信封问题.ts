/*
 * @lc app=leetcode.cn id=354 lang=typescript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
function maxEnvelopes(envelopes: number[][]): number {
    if (envelopes.length == 0) { return 0 };

    const n = envelopes.length;
    
    // 升序
    envelopes.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return b[1] - a[1]
        }
    })

    const dp = new Array(n).fill(1);
    let ans = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        ans = Math.max(dp[i], ans)
    }
    return ans;
};
// @lc code=end

