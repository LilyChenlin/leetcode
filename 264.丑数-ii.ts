/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */

// @lc code=start
var nthUglyNumber = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1;
    let p2 = 1, p3 = 1, p5 = 1;
    for (let i = 2; i <= n; i++) {
        let num2 = 2 * dp[p2], num3 = 3 * dp[p3], num5 = 5 * dp[p5];
        dp[i] = Math.min(Math.min(num2, num3), num5);
        if (dp[i] === num2) {
            p2++
        } 
        if (dp[i] === num3) {
            p3++
        } 
        if (dp[i] === num5) {
            p5++
        } 
    }
    return dp[n]
};
// @lc code=end

