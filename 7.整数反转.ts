/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
var reverse = function (x) {
    let ans = 0;
    while (x != 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        ans = ans * 10 + digit;
        if (ans < (-2) ** 31 || ans > 2 ** 31 - 1) {
            return 0;
        }
    }
    return ans;
};
// @lc code=end

