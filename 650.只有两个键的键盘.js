/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let ans = 0;
    for (let i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            ans += i;
            n /= i;
        }
    }
    if (n != 1) ans += n;
    return ans;
};
// @lc code=end

