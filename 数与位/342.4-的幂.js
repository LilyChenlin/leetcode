/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n == 1) {
        return true;
    }
    while (n > 1) {
        n = n / 4;
    }
    if (n == 1) return true;
    return false
};
// @lc code=end

