/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1, right = n;
    while (left < right) {
        const mid = left + Math.round((right - left) / 2);
        if (mid * (mid + 1) <= 2 * n) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
// @lc code=end

